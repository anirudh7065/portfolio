"use client";
import Link from "next/link";
import Image from "next/image";
import { useFetchData } from "@/app/hooks/useFetchData";
import { usePathname } from "next/navigation";
import ThemeToggle from "./toggletheme";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetDescription,
  SheetTitle
} from "@/components/ui/sheet";

type Navigation = {
  name: string;
  url: string;
};
const MobileNav = () => {
  const { data: navs = [] } = useFetchData<Navigation[]>("/api/navigations");
  const path = usePathname();
  return (
    <nav className="flex justify-between items-center p-4 md:hidden">
      <section className="w-full max-w-66 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Image
              src="./icons/hamburger.svg"
              width={30}
              height={30}
              alt="hamburger icon"
              className="cursor-pointer md:hidden dark:invert-0 invert"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="border-none dark:bg-dark-1 bg-dark-2"
          >
            <SheetTitle className={""}>
              <figure className="w-full flex justify-center items-center mt-4 mb-10 gap-2">
                <div className="p-2 border-3 rounded-full dark:border-dark-2 border-dark-4">
                    <span className="text-3xl text-white">A</span>
                    <span className="text-3xl text-white">V</span>
                </div>
                <h2 className="text-3xl text-white  font-bold ">
                  Porfolio
                </h2>
              </figure>
            </SheetTitle>
            <SheetDescription />
            <section className=" flex h-full py-4 items-center flex-col gap-10 text-white">
              {navs.map((item) => (
                <SheetClose
                  asChild
                  key={item.name}
                  className={`w-[70%] text-center p-2  rounded-full ${
                    path === item.url
                      ? "dark:bg-dark-2 bg-dark-4  font-extrabold"
                      : ""
                  }`}
                >
                  <Link
                    href={"." + item.url}
                    className={`text-xl cursor-pointer text-white font-semibold `}
                    key={item.name}
                  >
                    {item.name}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose>
                <Link
                  href="/resume/resume_july.pdf"
                  target="_blank"
                  className="bg-black hover:bg-opacity-80 p-2 rounded-full"
                >
                  View Resume
                </Link>
              </SheetClose>
              <div className="w-full flex justify-end px-4 absolute bottom-6">
              <ThemeToggle />
              </div>
            </section>
          </SheetContent>
        </Sheet>
      </section>
      <figure className="flex justify-center items-center gap-2 md:hidden">
        <div className="px-2 py-1 border-3 rounded-full dark:border-dark-2 border-dark-2">
          <Link href={"./"} className="">
            <span className="text-sm dark:text-white text-dark-1 ">A</span>
            <span className="text-sm dark:text-white  text-dark-2">V</span>
          </Link>
        </div>
      </figure>
    </nav>
  );
};

export default MobileNav;
