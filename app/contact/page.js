import ContactLinks from '@/components/ContactLinks'
import Image from 'next/image'
import { contacts } from '@/constants/constant';

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
            width={'280'}
            height={'280'}
          />
        </div>
        <div className='md:text-left md:w-10/12 flex flex-col'>
          <span>Thanks For Visiting !</span>
          <span>You can contact me on</span>
        </div>
      </div>
      <ul className='md:flex md:gap-14 grid grid-cols-4 grid-rows-1'>
        {contacts.map((item, index) => (
          <ContactLinks key={index} link={item.url} title={item.name}/>
        ))}
      </ul>
    </main>
  )
}

export default page