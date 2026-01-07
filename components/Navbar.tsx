"use client";
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
  const { data: navs = [] } = useFetchData<Navigation[]>("/api/navigations");


  return (
    <>
      <main
        className="md:flex flex-row justify-between md:h-25
 items-center md:gap-2 mx-8 select-none hidden "
      >
        <div className="p-2 border-3 rounded-full dark:border-dark-2 border-dark-2">
          <Link href={"./"} className="">
            <span className="text-2xl dark:text-white text-dark-1 ">A</span>
            <span className="text-2xl dark:text-white  text-dark-2">V</span>
          </Link>
        </div>
        <nav className="">
          <ul className="flex gap-1 md:gap-4">
            {navs.map((item) => (
              <Link href={"." + item.url} key={item.name}>
                <li
                  className={`px-4 py-2 rounded-full ${path === item.url
                      ? "dark:bg-dark-1 bg-dark-2  font-semibold text-white"
                    : " hover:bg-[#ac5483cb] dark:hover:bg-[#ac5483] hover:bg-opacity-50 hover:text-white "
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
            className="bg-dark-2 text-white dark:bg-dark-1 hover:bg-opacity-80 font-semibold px-4 py-2 rounded-full dark:black-outline-text dark:border-[1px] border-black"
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
