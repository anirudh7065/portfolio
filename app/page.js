import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center md:my-5">
        <div className="text-purple-800 md:text-[80px] text-4xl text-center my-5 leading-loose">Hi! Welcome To My Portfolio</div>
        <div className="md:text-[50px] text-2xl text-center leading-loose">I am Abhishek Valsan, and I&apos;m thrilled to welcome you to my corner of the digital world.</div>
        <div className="flex md:flex-row flex-col justify-center items-center my-10  md:my-10 md:gap-3 gap-5">
          <span className="text-lg md:text-xl">Technologies Known :-</span>
          <span className="grid grid-cols-3 grid-rows-3 md:flex md:gap-4  gap-2 items-center justify-center">
            <span>
              <Image
                className=''
                src={"./langs/Js.svg"}
                width={30}
                height={30}
                alt='soft.png'
                priority={true}
              />
            </span>
            
            <span>
              <Image
                className=''
                src={"./langs/c.svg"}
                width={30}
                height={30}
                alt='soft.png'
                priority={true}
              />
            </span>
            <span>
              <Image
                className=''
                src={"./langs/c++.svg"}
                width={30}
                height={30}
                alt='soft.png'
                priority={true}
              />
            </span>
            <span>
              <Image
                className=''
                src={"./langs/mongodb-icon-1.svg"}
                width={30}
                height={30}
                alt='soft.png'
                priority={true}
              />
            </span>
            <span>
              <Image
                className='bg-white rounded-full'
                src={"./langs/next-js.svg"}
                width={30}
                height={30}
                alt='soft.png'
                priority={true}
              />
            </span>
            <span>
              <Image
                className=''
                src={"./langs/nodejs.svg"}
                width={60}
                height={60}
                alt='soft.png'
                priority={true}
              />
            </span>
            <span>
              <Image
                className=''
                src={"./langs/react-1.svg"}
                width={30}
                height={30}
                alt='soft.png'
                priority={true}
              />
            </span>
            <span>
              <Image
                className=''
                src={"./langs/python-icon.svg"}
                width={30}
                height={30}
                alt='soft.png'
                priority={true}
              />
            </span>
            <span>
              <Image
                className='bg-white'
                src={"./langs/expressjs.svg"}
                width={60}
                height={50}
                alt='soft.png'
                priority={true}
              />
            </span>
            <span>
              <Image
                className='bg-white'
                src={"./langs/tailwindcss-icon.svg"}
                width={30}
                height={30}
                alt='soft.png'
                priority={true}
              />
            </span>
          </span>
        </div>
      </main>
    </>
  );
}
