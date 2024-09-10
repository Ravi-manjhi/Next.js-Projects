import "./globals.scss";

export const metadata = {
  title: "vyalinks | dashboard",
  description: "Give Your business new height ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
