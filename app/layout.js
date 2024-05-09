import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--poppins-font",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});
import "./globals.css";



export const metadata = {
  title: "Extend Fashion : A One-Stop Solution For Apparel Sourcing",
  description: "A One-Stop Solution For Apparel Sourcing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
