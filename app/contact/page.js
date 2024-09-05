import ContactLinks from '@/components/ContactLinks'
import Image from 'next/image'

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
        <ContactLinks link={"https://linkedin.com/in/abhishek-valsan-7590a6224"} title={"LinkedIn"}/>
        <ContactLinks link={"https://github.com/anirudh7065"} title={"Github"}/>
        <ContactLinks link={"mailto:anirudhraj02@gmail.com?"} title={"Email"}/>
        <ContactLinks link={"https://www.instagram.com/anni.raj.002/"} title={"Instagram"}/>
      </ul>
    </main>
  )
}

export default page