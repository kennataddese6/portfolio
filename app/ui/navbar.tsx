"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { MdClose, MdMenu } from "react-icons/md"

export default function Navbar() {
  const pathname = usePathname()
  const [showMobileNav, setShowMobileNav] = useState(false)
  return (
    <nav
      className={`md:flex  fixed z-50 w-full md:justify-between md:py-8 md:px-20 px-4 py-6 bg-black md:bg-transparent  md:h-auto bg-[url(/navbg.png)] bg-no-repeat bg-[center_top_12rem] ${
        showMobileNav ? "h-screen animate-fadein" : ""
      }`}
    >
      <div className="text-white text-xl md:text-2xl font-bold mb-5 flex justify-between items-center">
        Kenna{" "}
        <span
          className={`md:hidden ${!showMobileNav && "hidden"}`}
          onClick={() => setShowMobileNav(false)}
        >
          <MdClose fontSize={20} />
        </span>
        <span
          className={`md:hidden ${showMobileNav && "hidden"}`}
          onClick={() => setShowMobileNav(true)}
        >
          <MdMenu fontSize={20} />
        </span>
      </div>
      <ul
        className={`text-white md:flex gap-20 text-base ${
          showMobileNav ? "" : "hidden"
        }`}
      >
        <Link href={"/"} className="no-underline">
          <li
            className={`py-4 md:py-0 border-t-2 border-b-2 border-neutral-800 md:border-none ${
              pathname === "/" ? "text-white" : "text-neutral-600 "
            }`}
          >
            Home
          </li>
        </Link>

        <Link href={"/about"} className="no-underline">
          <li
            className={` py-4 md:py-0  border-b-2 border-neutral-800 md:border-none ${
              pathname === "/about" ? "text-white" : "text-neutral-600"
            }`}
          >
            About
          </li>
        </Link>
        <li className="text-neutral-600 py-4 md:py-0  border-b-2 border-neutral-800 md:border-none">
          Projects
        </li>
        <li className="text-neutral-600 py-4 md:py-0  border-b-2 border-neutral-800 md:border-none">
          Contact
        </li>
      </ul>
    </nav>
  )
}
