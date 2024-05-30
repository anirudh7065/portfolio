import React from 'react'
import Image from 'next/image'

export const metadata = {
  title: "Certificate",
  description: "Certificate page of my portfolio",
};

const page = () => {
  return (
    <div className='flex flex-col items-center my-10 w-auto md:mx-0 mx-3'>
    <Image
    className='my-4 border-2 md:border-4 border-purple-500'
    src={"./soft.png"}
    width={800}
    height={1200}
    alt='soft.png'
    priority={true}
    />
    <Image
    className='my-4 border-2 md:border-4 border-purple-500'
    src={"./css.png"}
    width={800}
    height={1200}
    alt='soft.png'
    priority={true}
    />
    <Image
    className='my-4 border-2 md:border-4 border-purple-500'
    src={"./cpp-info.png"}
    width={800}
    height={1200}
    alt='soft.png'
    priority={true}
    />
    <Image
    className='my-4 border-2 md:border-4 border-purple-500'
    src={"./html5.png"}
    width={800}
    height={1200}
    alt='soft.png'
    priority={true}
    />
    <Image
    className='my-4 border-2 md:border-4 border-purple-500'
    src={"./tcs.png"}
    width={800}
    height={1200}
    alt='soft.png'
    priority={true}
    />
    <Image
    className='my-4 border-2 md:border-4 border-purple-500'
    src={"./postman-letsu.png"}
    width={800}
    height={1200}
    alt='soft.png'
    priority={true}
    />
    
    </div>
  )
}

export default page