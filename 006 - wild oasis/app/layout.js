import NextTopLoader from "nextjs-toploader";
import Header from "@/app/_components/Header";
import { josefin } from "./_fonts/fonts";
import "@/app/_styles/global.css";
import BookingContextProvider from "./_context/bookingContext";

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

const color =
  "linear-gradient(90deg, rgba(207,86,86,1) 0%, rgba(85,89,237,0.9528186274509804) 25%, rgba(237,85,211,0.9528186274509804) 50%, rgba(85,237,230,0.9528186274509804) 75%, rgba(93,237,85,0.9528186274509804) 100%)";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <NextTopLoader
          showSpinner={false}
          color={color}
          crawlSpeed={150}
          speed={150}
        />
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <BookingContextProvider>{children}</BookingContextProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
