"use client";
import {
  MdOutlineHome,
  MdOutlineLayers,
  MdHistory,
  MdOutlineSettings,
  MdOutlineInfo,
} from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <ul className="tab-list">
        <li className="current">
          <Link className={`${pathname === "/home" ? "active" : ""}`} href="/">
            <MdOutlineHome className="icon" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname === "/arrangement" ? "active" : ""}`}
            href="/arrangement"
          >
            <MdOutlineLayers className="icon" />
            <span>Arrangement</span>
          </Link>
        </li>
        <li>
          <Link
            className={`underdevelopment ${pathname === "/history" ? "active" : ""}`}
            href=""
          >
            <MdHistory className="icon" />
            <span>History - under develpment</span>
          </Link>
        </li>
        <li>
          <Link
            className={`underdevelopment ${pathname === "/settings" ? "active" : ""}`}
            href=""
          >
            <MdOutlineSettings className="icon" />
            <span>Settings - under development</span>
          </Link>
        </li>
      </ul>
      <ul className="tab-list">
        <li>
          <Link
            className={`${pathname === "/about" ? "active" : ""}`}
            href="/about"
          >
            <MdOutlineInfo className="icon" />
            <span>About</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};
export default SideBar;
