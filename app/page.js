import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <main className="flex flex-col items-center justify-center py-20">
      <div className="text-purple-800 text-[80px]">Hi! Welcome To My Portfolio</div>
      <div className="text-[50px] text-center">I am Abhishek Valsan, and I&apos;m thrilled to welcome you to my corner of the digital world.</div>
      <div className="flex my-12 gap-3">
        <span className="text-2xl">Technologies Known :-</span>
        <span>
        <Image
          className=''
          src={"./langs/Js.svg"}
          width={30}
          height={30}
          alt='soft.png'
        />
        </span>
        <span>
        <Image
          className=''
          src={"./langs/c.svg"}
          width={30}
          height={30}
          alt='soft.png'
        />
        </span>
        <span>
        <Image
          className=''
          src={"./langs/c++.svg"}
          width={30}
          height={30}
          alt='soft.png'
        />
        </span>
        <span>
        <Image
          className=''
          src={"./langs/mongodb-icon-1.svg"}
          width={30}
          height={30}
          alt='soft.png'
        />
        </span>
        <span>
        <Image
          className='bg-white rounded-full'
          src={"./langs/next-js.svg"}
          width={30}
          height={30}
          alt='soft.png'
        />
        </span>
        <span>
        <Image
          className=''
          src={"./langs/nodejs.svg"}
          width={60}
          height={60}
          alt='soft.png'
        />
        </span>
        <span>
        <Image
          className=''
          src={"./langs/react-1.svg"}
          width={30}
          height={30}
          alt='soft.png'
        />
        </span>
        <span>
        <Image
          className=''
          src={"./langs/python-icon.svg"}
          width={30}
          height={30}
          alt='soft.png'
        />
        </span>
        <span>
        <Image
          className='bg-white'
          src={"./langs/expressjs.svg"}
          width={60}
          height={50}
          alt='soft.png'
        />
        </span>
        <span>
        <Image
          className='bg-white'
          src={"./langs/tailwindcss-icon.svg"}
          width={30}
          height={30}
          alt='soft.png'
        />
        </span>
      </div>
    </main>
    </>
  );
}
