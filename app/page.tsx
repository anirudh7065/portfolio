import LangLogo from "@/components/LangLogo";
import About from "./about/page";
import Certificate from "./certificates/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import { fetchData } from "@/lib/fetchdata";
import Link from "next/link";

type Lang = {
  name: string;
  url: string;
}
export default async function Home() {
  const langs = await fetchData<Lang[]>("/api/languages");
  return (
    <>
      <main className="flex flex-col items-center justify-center  md:min-h-[calc(100vh-130px)] w-full px-10">
          <h1 className=" md:text-6xl text-3xl text-center leading-loose dark:text-[#FFF15C] text-dark-2">
            ABHISHEK VALSAN
        </h1>
        <h2 className="md:text-4xl text-lg text-center leading-loose">
          Full-Stack Developer building practical web applications with MERN & Next.js
        </h2>
          <h3 className="md:text-2xl text-sm text-center leading-loose">
          I build end-to-end web applications with clean UI and reliable backend systems.
        </h3>
        <div className="flex max-sm:flex-col gap-4 my-6">
          <Link
            href={"./projects"}
            className="px-4 py-2 rounded-4xl dark:bg-dark-1 font-bold text-white bg-dark-2"
          >
            View Projects
          </Link>
          <Link
            href={"/resume/resume.pdf"}
            className="px-4 py-2 rounded-4xl dark:bg-dark-1 font-bold text-white bg-dark-2"
          >
            View Resume
          </Link>
        </div>
        <section className="flex md:flex-row flex-col justify-center items-center my-10  md:my-4 md:gap-3 gap-5">
      
            <h4 className="text-lg md:text-xl">Tech Stack :-</h4>
            <figure className="grid grid-cols-3 grid-rows-3 md:flex gap-4 items-center justify-center  ">
              {langs.map((item) => (
                <LangLogo
                  key={item.name}
                  url={item.url}
                  spanClassName={
                    item.name === "Tailwindcss"
                      ? " flex justify-center"
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
