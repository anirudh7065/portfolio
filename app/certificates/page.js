import React from 'react'
import Image from 'next/image'
import Loader from '@/components/Loader';
import ImageComponent from '@/components/ImageComponent';

export const metadata = {
  title: "Certificate",
  description: "Certificate page of my portfolio",
};

const page = () => {

  return (
    <div className='flex flex-col items-center my-10 w-auto md:mx-0 mx-3'>
      <ImageComponent src={ "./soft-min.png" } alt={'Image of softpro certificate'}/>
      <ImageComponent src={ "./css.png" } alt={'Image of css certificate'}/>
      <ImageComponent src={ "./cpp-info.png" } alt={'Image of cpp certificate'}/>
      <ImageComponent src={ "./html5.png" } alt={'Image of html5 certificate'}/>
      <ImageComponent src={ "./tcs.png" } alt={'Image of tcs certificate'}/>
      <ImageComponent src={ "./postman-letsu.png" } alt={'Image of postman certificate'}/>

    </div>
  )
}

export default page