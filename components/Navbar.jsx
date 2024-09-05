import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <>
    <nav className='md:flex md:flex-row justify-between md:h-20 items-center md:gap-2 mx-8 select-none hidden '>
      <div className='flex justify-center items-center'>
        <Link href={"./"} >
        <Image
          className='bg-cover'
          src="./icons/logo.svg"
          height={35}
          width={35}
          alt='logo.png'
          />
          </Link>
      </div>
      <div className=''>
        <ul className='flex gap-1 md:gap-4'>
          <li className='hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-full'><Link href={"./"} >Home</Link></li>
          <li className='hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-full'><Link href={"./about"} >About</Link></li>
          <li className='hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-full'><Link href={"./certificates"} >Certificates</Link></li>
          <li className='hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-full'><Link href={"./projects"} >Projects</Link></li>
          <li className='hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-full'><Link href={"./contact"} >Contact</Link></li>
        </ul>
      </div>
      </nav>
      <MobileNav/>
    </>
  )
}

export default Navbar
