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
      <section className="w-full max-w-[264px] md:hidden">
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
            className="border-none dark:bg-dark-1 bg-yellow-400"
          >
            <SheetTitle className={""}>
              <figure className="w-full flex justify-center items-center mt-4 mb-10 gap-2">
                <Image
                  src="./icons/logo.svg"
                  width={100}
                  height={100}
                  alt="profile logo"
                  className="cover items-center md:hidden w-[50px] h-[30px]"
                />
                <h2 className="text-3xl dark:text-white  font-bold ">
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
                  className={`w-[70%] text-center p-2 rounded-full ${
                    path === item.url
                      ? "dark:bg-dark-2 bg-yellow-200  font-extrabold"
                      : ""
                  }`}
                >
                  <Link
                    href={"." + item.url}
                    className={`text-xl cursor-pointer text-black dark:text-white font-semibold `}
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
            </section>
          </SheetContent>
        </Sheet>
      </section>
      <figure className="flex justify-center items-center gap-2 md:hidden">
        <ThemeToggle />
        <Image
          src="./icons/logo.svg"
          width={25}
          height={25}
          alt="profile logo"
          className="cover items-center md:hidden "
        />
      </figure>
    </nav>
  );
};

export default MobileNav;
