import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ImageComponent from '@/components/ImageComponent';

export const metadata = {
  title: "Contact",
  description: "Contact page of my portfolio",
};

const page = () => {
  return (
    <main className='text-center flex flex-col items-center md:my-10'>
        <div className='md:text-[70px] leading-loose text-xl flex md:flex-row flex-col items-center justify-center gap-5 my-10'>
          <div className='md:w-1/4 w-1/2'>
          <Image
          src={'./img1.png'}
          alt='profile image'
          width={'170'}
          height={'170'}
          className='w-full h-full'
          />
          </div>
          <div className='md:text-left md:w-10/12 flex flex-col'>
          <span>Thanks For Visiting !</span>
          <span>You can contact me on</span>
          </div>
        </div>
        <ul className='md:flex md:gap-14 grid grid-cols-4 grid-rows-1'>
            <li className='md:text-[50px] rounded-full md:list-none list-none md:py-2 md:px-3 md:hover:bg-purple-400 md:hover:bg-opacity-10'><Link target='_blank' href={"https://linkedin.com/in/abhishek-valsan-7590a6224"} className='text-purple-600'>LinkedIn</Link></li>
            <li className='md:text-[50px] rounded-full md:list-disc list-none md:py-2 md:px-3 md:hover:bg-purple-400 md:hover:bg-opacity-10'><Link target='_blank' href={"https://github.com/anirudh7065"} className='text-purple-600'>Github</Link></li>
            <li className='md:text-[50px] rounded-full md:list-disc list-none md:py-2 md:px-3 md:hover:bg-purple-400 md:hover:bg-opacity-10'><Link target='_blank' href={"mailto:anirudhraj02@gmail.com?"} className='text-purple-600'>Gmail</Link></li>
            <li className='md:text-[50px] rounded-full md:list-disc list-none md:py-2 md:px-3 md:hover:bg-purple-400 md:hover:bg-opacity-10'><Link target='_blank' href={"https://www.instagram.com/anni.raj.002/"} className='text-purple-600'>Instagram</Link></li>
        </ul>
    </main>
  )
}

export default page