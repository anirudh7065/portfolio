import LangLogo from "@/components/LangLogo";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center md:my-5">
        <div className='dancing-script-font text-purple-800 md:text-[90px] text-4xl text-center my-5 leading-loose'>Hello Guys!</div>
        <div className="md:text-[50px] text-lg text-center leading-loose">I am Abhishek Valsan, and I&apos;m thrilled to welcome you to my corner of the digital world.</div>
        <div className="flex md:flex-row flex-col justify-center items-center my-10  md:my-10 md:gap-3 gap-5">
          <span className="text-lg md:text-xl">Technologies Known :-</span>
          <span className="grid grid-cols-3 grid-rows-3 md:flex gap-4 items-center justify-center  ">
            <LangLogo url={"./langs/Js.svg"} />
            <LangLogo url={"./langs/c.svg"} />
            <LangLogo url={"./langs/c++.svg"} />
            <LangLogo url={"./langs/mongodb-icon.svg"} />
            <LangLogo classname=' rounded-full invert-[10]' url={"./langs/next-js.svg"} />
            <LangLogo url={"./langs/nodejs.png"} />
            <LangLogo url={"./langs/react.svg"} />
            <LangLogo url={"./langs/python-icon.svg"} />
            <LangLogo url={"./langs/expressjs.png"} />
            <LangLogo url={"./langs/tailwindcss-icon.svg"} spanClassName="col-span-3 flex justify-center" />
          </span>
        </div>
      </main>
    </>
  );
}
