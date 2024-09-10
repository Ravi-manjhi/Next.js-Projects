"use client";

import ReservationCard from "./ReservationCard";
import { useOptimistic } from "react";
import { deleteReservationAction } from "../_lib/actions";

const ReservationContainer = ({ bookings }) => {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,

    (currentState, optimisticValue) => {
      return currentState.filter((el) => el.id !== optimisticValue);
    }
  );

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteReservationAction(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ReservationContainer;
