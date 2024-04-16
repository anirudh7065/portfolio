import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: "Contact",
  description: "Contact page of my portfolio",
};

const page = () => {
  return (
    <main className='text-center flex flex-col items-center my-20'>
        <div className='text-[70px] flex items-center justify-center gap-5 my-10'>
          <Image
          prefetch={true}
          src={"/certi/img1.png"}
          alt={"profile"}
          width={300}
          height={300}
          />
          <div className='text-left w-10/12 flex flex-col'>
          <span>Thanks For Visiting !</span>
          <span>You can contact me on</span>
          </div>
        </div>
        <ul className='flex gap-14'>
            <li className='text-[50px] rounded-full list-none p-2 hover:bg-purple-400 hover:bg-opacity-10'><Link target='_blank' href={"https://linkedin.com/in/abhishek-valsan-7590a6224"} className='text-purple-600'>LinkedIn</Link></li>
            <li className='text-[50px] rounded-full list-disc p-2 hover:bg-purple-400 hover:bg-opacity-10'><Link target='_blank' href={"https://github.com/anirudh7065"} className='text-purple-600'>Github</Link></li>
            <li className='text-[50px] rounded-full list-disc p-2 hover:bg-purple-400 hover:bg-opacity-10'><Link target='_blank' href={"mailto:anirudhraj02@gmail.com?"} className='text-purple-600'>Gmail</Link></li>
            <li className='text-[50px] rounded-full list-disc p-2 hover:bg-purple-400 hover:bg-opacity-10'><Link target='_blank' href={"https://www.instagram.com/anni.raj.002/"} className='text-purple-600'>Instagram</Link></li>
        </ul>
    </main>
  )
}

export default page