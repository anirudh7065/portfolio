import React from 'react'
import Image from 'next/image'

export const metadata = {
  title: "Certificate",
  description: "Certificate page of my portfolio",
};

const page = () => {
  return (
    <div className='flex flex-col items-center my-10'>
    <Image
    className='my-4 border-4 border-purple-500'
    src={"/certi/soft.png"}
    width={800}
    height={1200}
    alt='soft.png'
    prefetch={true}
    />
    <Image
    className='my-4 border-4 border-purple-500'
    src={"/certi/css.png"}
    width={800}
    height={1200}
    alt='soft.png'
    prefetch={true}
    />
    <Image
    className='my-4 border-4 border-purple-500'
    src={"/certi/cpp-info.png"}
    width={800}
    height={1200}
    alt='soft.png'
    prefetch={true}
    />
    <Image
    className='my-4 border-4 border-purple-500'
    src={"/certi/html5.png"}
    width={800}
    height={1200}
    alt='soft.png'
    prefetch={true}
    />
    <Image
    className='my-4 border-4 border-purple-500'
    src={"/certi/tcs.png"}
    width={800}
    height={1200}
    alt='soft.png'
    prefetch={true}
    />
    <Image
    className='my-4 border-4 border-purple-500'
    src={"/certi/postman-letsu.png"}
    width={800}
    height={1200}
    alt='soft.png'
    prefetch={true}
    />
    
    </div>
  )
}

export default page