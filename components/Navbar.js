import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

function Navbar() {
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Android Games",
      path: "/games",
    },
    {
      title: "Android Apps",
      path: "/apps",
    },
    {
      title: "Tips n Tricks",
      path: "/blog",
    },
    // {
    //   title: "Contact",
    //   path: "/#contact",
    // },
  ];

  const [isSidebar, setIsSidebar] = useState(false);
  // const [matches, setMatches] = useState(
  //   window.matchMedia("(min-width: 768px)").matches
  // );

  // useEffect(() => {
  //   window
  //     .matchMedia("(min-width: 768px)")
  //     .addEventListener("change", (e) => setMatches(e.matches));
  //   if (isSidebar && !matches) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // });
  return (
    <header className="  max-h-28 py-3 overflow-hidden w-full  sticky top-0  z-50  bg-dark border-b border-b-zinc-800">
      {/* <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button> */}
      <nav className=" max-w-[1200px] mx-auto flex items-center justify-between px-5 md:px-3 ">
        <Link passHref href="/">
          {/* <a className="w-24 h-16 relative cursor-pointer block">
            <Image
              src={logo}
              layout="fill"
              alt="shodex garden logo"
              priority
              loading="eager"
            />
          </a> */}
          <h1 className="text-orange text-xl cursor-pointer font-bold">
            ANDROIDPILL
          </h1>
        </Link>

        <div className="flex">
          <div
            className={` ${
              isSidebar ? "block " : "hidden"
            } bg-dark fixed h-screen lg:h-full  inset-0  ease-in-out duration-500
          lg:block lg:relative`}
          >
            {/* <div className="relativ"> */}
            <MdOutlineClose
              className="cursor-pointer text-3xl  right-10 top-10 absolute lg:hidden text-zinc-600 bg-accent2"
              onClick={() => setIsSidebar(false)}
            />
            {/* </div> */}

            <ul className="flex lg:flex-row ml-auto flex-col justify-center items-center h-full  text-zinc-100  -mt-10 md:-mt-0">
              {navLinks.map((navLink) => (
                <li
                  className="hover:text-orange flex flex-col items-center text-lg md:text-sm  px-4 py-2 my-4 lg:my-1 font-medium  lg:capitalize uppercase"
                  onClick={() => setIsSidebar(false)}
                  key={navLink.title}
                >
                  <Link passHref href={navLink.path}>
                    {navLink.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <FiMenu
            onClick={() => setIsSidebar(true)}
            className="ml-4 mr-1 lg:hidden cursor-pointer text-2xl text-zinc-600 dark:text-zinc-100"
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
