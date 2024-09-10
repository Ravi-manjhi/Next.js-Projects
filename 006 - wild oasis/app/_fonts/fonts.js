import { Josefin_Sans } from "next/font/google";
import { Poppins } from "next/font/google";

export const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
