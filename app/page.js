import LangLogo from "@/components/LangLogo";
import { langs } from "@/constants/constant";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center md:my-5">
        <div className='dancing-script-font text-purple-800 md:text-[90px] text-4xl text-center my-5 leading-loose'>Hello Guys!</div>
        <div className="md:text-[50px] text-lg text-center leading-loose">I am Abhishek Valsan, and I&apos;m thrilled to welcome you to my corner of the digital world.</div>
        <div className="flex md:flex-row flex-col justify-center items-center my-10  md:my-10 md:gap-3 gap-5">
          <span className="text-lg md:text-xl">Technologies Known :-</span>
          <span className="grid grid-cols-3 grid-rows-3 md:flex gap-4 items-center justify-center  ">
            {langs.map((item) => (
                <LangLogo key={item.name} url={item.url}
                  spanClassName={item.name === 'Tailwindcss' ? "col-span-3 flex justify-center" : ''}
                  classname={item.name === 'Next.js'?'rounded-full invert-[10]':''}
                />
              )
            )}
          </span>
        </div>
      </main>
    </>
  );
}
