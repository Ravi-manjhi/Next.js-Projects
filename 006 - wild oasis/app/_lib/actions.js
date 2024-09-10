"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";

const { signIn, signOut, auth } = require("./auth");

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function UpdateProfileAction(formData) {
  try {
    const session = await auth();

    if (!session) throw new Error("You must be logged in.");

    const nationalID = formData.get("nationalID");
    const [nationality, countryFlag] = formData.get("nationality").split("%");

    if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
      throw new Error("Please provide valid national ID");

    const updateData = { nationalID, nationality, countryFlag };

    const { error } = await supabase
      .from("guests")
      .update(updateData)
      .eq("id", session.user.guestId)
      .select()
      .single();

    if (error) {
      console.error(error);
      throw new Error("profile could not be updated");
    }

    return revalidatePath("/account/profile");
  } catch (error) {
    throw error;
  }
}

export async function deleteReservationAction(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in.");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  return revalidatePath("/account/reservations");
}

export async function updateReservationAction(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in.");

  const bookingId = formData.get("id");
  const numGuests = formData.get("numGuests");
  const observations = formData.get("observations");

  const { error } = await supabase
    .from("bookings")
    .update({ numGuests, observations })
    .eq("id", bookingId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }

  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath(`/account/reservations`);

  redirect("/account/reservations");
}

export async function createBookingAction(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in.");

  const payload = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: +formData.get("numGuests"),
    observations: formData.get("observations"),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  const { error } = await supabase.from("bookings").insert([payload]);

  if (error) throw new Error("Booking could not be created");

  revalidatePath(`cabins/${bookingData.cabinId}`);
  revalidatePath(`/account/reservations`);
  redirect("/cabins/thankyou");
}
