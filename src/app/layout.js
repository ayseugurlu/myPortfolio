import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Ayse Ugurlu",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
