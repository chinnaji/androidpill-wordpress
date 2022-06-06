import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import Search from "./Search";
import logo from "../images/logo.svg";

function Navbar() {
  const [isSearch, setIsSearch] = useState(false);
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Android Games",
      path: "/android-games",
    },
    {
      title: "Android Apps",
      path: "/android-apps",
    },
    {
      title: "Tips n Tricks",
      path: "/tips-n-tricks",
    },
    // {
    //   title: "Contact",
    //   path: "/#contact",
    // },
  ];

  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <>
      <header className="  max-h-28 py-3 overflow-hidden w-full  sticky top-0  z-50  bg-dark border-b border-b-zinc-800">
        {/* <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button> */}
        <nav className=" max-w-[1200px] mx-auto flex items-center justify-between px-3 ">
          <Link passHref href="/">
            <a className="w-48 h-9 md:h-12 relative cursor-pointer block md:-ml-0 -ml-5">
              <Image
                src={logo}
                layout="fill"
                alt="shodex garden logo"
                priority
                loading="eager"
              />
            </a>
            {/* <a>
              <h1 className="text-orange text-xl cursor-pointer font-bold">
                ANDROIDPILL
              </h1>
            </a> */}
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
                className="cursor-pointer text-3xl  right-10 top-10 absolute lg:hidden text-zinc-400 bg-accent2 rounded"
                onClick={() => setIsSidebar(false)}
              />
              {/* </div> */}

              <ul className="flex lg:flex-row ml-auto flex-col justify-center items-center h-full  text-zinc-100  -mt-10 md:-mt-0">
                {navLinks.map((navLink) => (
                  <li
                    className={`hover:text-teal flex flex-col items-center text-lg md:text-sm  px-4 py-2 my-4 lg:my-1 font-medium  lg:capitalize uppercase`}
                    onClick={() => setIsSidebar(false)}
                    key={navLink.title}
                  >
                    <Link passHref href={navLink.path}>
                      <a>{navLink.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <span
                // onClick={() => setIsSearch(!isSearch)}
                onClick={() => setIsSearch(true)}
              >
                <FiSearch className="text-zinc-100 text-2xl mr-2 cursor-pointer hover:text-teal" />
              </span>

              <FiMenu
                onClick={() => setIsSidebar(true)}
                className="ml-4 mr-1 lg:hidden cursor-pointer text-2xl text-zinc-600 dark:text-zinc-100"
              />
            </div>
          </div>
        </nav>
      </header>

      {isSearch ? <Search setIsSearch={setIsSearch} /> : null}
    </>
  );
}

export default Navbar;
