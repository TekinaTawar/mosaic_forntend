import { Inter } from "next/font/google";
import "./globals.scss";
import UnsupportedDevice from "./components/UnsupportedDevice";
import logo from "../public/logo.svg";
import Image from "next/image";

import SideBar from "./components/SideBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MOSAIC",
  description: "Arranging patterns in textile Industry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UnsupportedDevice />
        <header>
          <div className="logo-container">
            <Image className="logo" src={logo} alt="Logo" />
            <h1 className="mosaic">
              MOSAIC<span> By Vista</span>
            </h1>
          </div>
          <p className="project-title">{/*untitled.mosic*/}</p>
        </header>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
