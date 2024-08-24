import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex md:flex-row flex-col justify-between md:h-20 items-center md:gap-2 mx-8 w-auto select-none'>
      <div className='flex justify-center items-center'>
        <Image
          className='bg-cover'
          src="./logo.svg"
          height={91}
          width={91}
          alt='logo.png'
        />
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
  )
}

export default Navbar
