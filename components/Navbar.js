import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex justify-between h-20 items-center gap-2 mx-8'>
      <div>
        <Image
          className='bg-cover'
          src="./logo.svg"
          height={91}
          width={91}
          alt='logo.png'
        />
      </div>
      <div>
        <ul className='flex gap-4'>
          <li className='hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-full'><Link href={"./"} prefetch={true}>Home</Link></li>
          <li className='hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-full'><Link href={"./about"} prefetch={true}>About</Link></li>
          <li className='hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-full'><Link href={"./certificates"} prefetch={true}>Certificates</Link></li>
          <li className='hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-full'><Link href={"./contact"} prefetch={true}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar