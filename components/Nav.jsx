"use client"

import { useState } from "react";
import Link from "next/link";
import { Sling as Hamburger } from 'hamburger-react';
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';


const Nav = () => {
  const [isOpen, setOpen] = useState(false)
  const pathname = usePathname();

  //framer motion for sidebar
  const sidebar_animtion = {
    //system view
    open: {
      width: "16rem",
      display: "block",
      transition: {
        damping: 40,
      }
    },
    closed: {
      width: "4rem",
      transition: {
        damping: 40,
      }
    }
  }

  // content of navbar is array
  const navItem = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Service",
      href: "/service"
    },
    {
      name: "Portfolio",
      href: "/profile"
    },
    {
      name: "News",
      href: "/news"
    },
    {
      name: "Contact",
      href: "/contact"
    }
  ]

  return (
    <div>
      <div className="mt-3 absolute">
        {/*YOU CAN CHANGE THIS WITH YOUR NAME*/}
        <h1 className="font-bold text-[1rem] md:text-[1.5rem]">POLA</h1>
      </div>
      <div className="absolute z-[9999] right-2">
        <Hamburger toggled={isOpen} toggle={setOpen} direction="right" duration={0.8} size={22} />
      </div>
      <motion.div
        variants={sidebar_animtion}
        animate={isOpen ? "open" : "closed"}
        className={`${isOpen ? "" : "opacity-0 md:opacity-100"} fixed w-[4rem] max-w-[14rem] md:max-w-[16rem] right-0 h-screen bg-pry-brown z-50`}>
        <div className={`${isOpen ? "flex" : "hidden md:flex"} flex-col items-center justify-center pt-24`}>
          {navItem.map((item) => (
            <Link key={item.name} href={item.href} className={`${isOpen ? "text-nav-open font-semibold mb-10 text-[0.90em] md:text-[1em]" : "text-nav-closed"} ${pathname == item.href ? "active" : ""} transition ease-out delay-1000`}>
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Nav;