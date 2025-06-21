"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import ThemeToggle from "./toggletheme";
import { useFetchData } from "@/app/hooks/useFetchData";

type Navigation = {
  name: string;
  url: string;
};


const Navbar = () => {
  const path = usePathname();
    const { data: navs=[] } = useFetchData<Navigation[]>("/api/navigations");


  return (
    <>
      <main
        className="md:flex flex-row justify-between md:h-[100px] 
 items-center md:gap-2 mx-8 select-none hidden "
      >
        <figure className="flex justify-center items-center">
          <Link href={"./"}>
            <Image
              className="bg-cover"
              src="./icons/logo.svg"
              height={35}
              width={35}
              alt="logo.png"
            />
          </Link>
        </figure>
        <nav className="">
          <ul className="flex gap-1 md:gap-4">
            {navs.map((item) => (
              <Link href={"." + item.url} key={item.name}>
                <li
                  className={`p-2 rounded-full ${
                    path === item.url
                      ? "dark:bg-dark-1 bg-yellow-400  font-semibold"
                      : " hover:bg-yellow-400 dark:hover:bg-dark-1 hover:bg-opacity-50 "
                  }`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <div className="flex gap-6">
          <Link
            href="/resume/resume_july.pdf"
            target="_blank"
            className="bg-yellow-400 dark:bg-dark-1 hover:bg-opacity-80 font-semibold px-4 py-2 rounded-full dark:black-outline-text dark:border-[1px] border-black"
          >
            View Resume
          </Link>
          <ThemeToggle />
        </div>
      </main>
      <MobileNav />
    </>
  );
};

export default Navbar;
