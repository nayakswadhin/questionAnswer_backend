"use client";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav
      className={`${
        navbar ? "animate-trans-navbarbg" : "animate-none"
      } bg-navbg w-full h-auto md:flex justify-between items-center top-0 text-[#FEE715] backdrop-blur-sm py-1 z-[200] bg-[#101820] bg-opacity-75 sticky`}
    >
      <div className="flex justify-between items-center">
        <Link href="#home">
          <Image
            src={"/logo3.webp"}
            alt="logo"
            width="150"
            height="150"
            className="flex justify-center items-center md:pl-4 w-[120px] h-[65px]"
          />
        </Link>
        <span className="pr-8 md:hidden flex items-center justify-center">
          <Hamburger
            toggled={navbar}
            toggle={() => setNavbar(!navbar)}
            duration={0.5}
          />
        </span>
      </div>
      <ul
        className={`md:flex h-auto  md:space-x-3 items-center justify-center md:pr-4  ${
          navbar ? "block" : "hidden"
        }`}
      >
        {/* <Link href="/#about-us">
          <li className="animate-trans-navbar-component-2 md:animate-none p-2 md:pl-3 pl-8 text-[23px] border-2 border-solid border-black rounded-md bg-red-600">
            Log Out
          </li>
        </Link> */}

        <div className="empty h-6 w-fit"></div>
      </ul>
    </nav>
  );
}

export default Navbar;
