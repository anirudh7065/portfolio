import LangLogo from "@/components/LangLogo";
import About from "./about/page";
import Certificate from "./certificates/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import { fetchData } from "@/lib/fetchdata";

type Lang = {
  name: string;
  url: string;
}
export default async function Home() {
  const langs = await fetchData<Lang[]>("/api/languages");
  return (
    <>
      <main className="flex flex-col items-center justify-center  md:min-h-[calc(100vh-130px)] h-[calc(100vh-80px)] w-full px-10">
          <h1 className="dancing-script-font  md:text-[80px] text-4xl text-center leading-loose dark:text-[#FFF15C] text-dark-2">
            Hello Guys!
          </h1>
          <h3 className="md:text-[40px] text-lg text-center leading-loose">
            I am Abhishek Valsan, and I&apos;m thrilled to welcome you to my
            corner of the digital world.
          </h3>
          <section className="flex md:flex-row flex-col justify-center items-center my-10  md:my-10 md:gap-3 gap-5">
            <h4 className="text-lg md:text-xl">Technologies Known :-</h4>
            <figure className="grid grid-cols-3 grid-rows-3 md:flex gap-4 items-center justify-center  ">
              {langs.map((item) => (
                <LangLogo
                  key={item.name}
                  url={item.url}
                  spanClassName={
                    item.name === "Tailwindcss"
                      ? "col-span-3 flex justify-center"
                      : ""
                  }
                  classname={
                    item.name === "Next.js"
                      ? "rounded-full dark:invert-[10]"
                      : ""
                  }
                />
              ))}
          </figure>
          </section>
      </main>
      <About />
      <Certificate />
      <Projects />
      <Contact />
    </>
  );
}
