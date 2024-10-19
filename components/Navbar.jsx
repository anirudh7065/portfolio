'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav'
import { usePathname } from 'next/navigation'
import { navs } from '@/constants/constant'

const Navbar = () => {
  const path = usePathname();

  return (
    <>
      <nav className="md:flex md:flex-row justify-between md:h-20 items-center md:gap-2 mx-8 select-none hidden ">
        <div className="flex justify-center items-center">
          <Link href={"./"}>
            <Image
              className="bg-cover"
              src="./icons/logo.svg"
              height={35}
              width={35}
              alt="logo.png"
            />
          </Link>
        </div>
        <div className="">
          <ul className="flex gap-1 md:gap-4">
            {navs.map((item) => (
              <Link href={"." + item.url} key={item.name}>
                <li
                  className={`hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-full ${
                    path === item.url
                      ? "bg-purple-700 bg-opacity-80 font-bold"
                      : ""
                  }`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
      <MobileNav />
    </>
  );
}

export default Navbar
