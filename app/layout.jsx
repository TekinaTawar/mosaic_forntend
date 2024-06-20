import { Inter } from "next/font/google";
import "./globals.scss";
import UnsupportedDevice from "./components/UnsupportedDevice";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MOSAIC",
  description: "Arranging patterns in textile Industry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UnsupportedDevice/>
        {children}
      </body>
    </html>
  );
}
