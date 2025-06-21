import React from 'react'
import Link from 'next/link';

const About = () => {
  return (
    <main className="scrollbar-none pb-10 md:px-10 px-4 lg:w-[80vw] w-full mx-auto">
      <h1 className="text-4xl text-center dark:text-[#FFF15C] font-bold">
        About
      </h1>
      <section className="edu my-10  break-words whitespace-pre-line">
        <h2 className="title text-2xl dark:text-[#FFF15C] text-blue-800">
          Educational Journey:
        </h2>
        <p className="body">
          I hold a degree in BCA from HR Institute of Science and Technology,
          where I cultivated a deep understanding of Computer Application. My
          academic background serves as the foundation for my commitment to
          lifelong learning and staying at the forefront of industry trends.{" "}
          <span className="text-red-600 dark:text-[#00FFFF]">
            Graduation Marksheet :-{" "}
          </span>
          <Link href={"./marksheet"}>Click Here</Link>
        </p>
      </section>
      <section className="edu my-10">
        <h2 className="title text-2xl dark:text-[#FFF15C] text-blue-800">
          Mission and Values:
        </h2>
        <p className="body">
          Driven by my goal to achieve in life, I&apos;m on a mission to become
          the best version of myself, I&apos;m dedicated to making a positive
          impact in the field of Software Development.
        </p>
      </section>
      <section className="edu my-10">
        <h2 className="title text-2xl dark:text-[#FFF15C] text-blue-800">
          Interests and Hobbies:
        </h2>
        <p className="body">
          Beyond my professional pursuits, I&apos;m an avid anime otaku, travel
          enthusiast, and explorer of new topics . Whether I&apos;m coding,
          watching anime, or simply enjoying the sceneries, you&apos;ll often
          find me finding something new to experience.
        </p>
      </section>
      <section className="edu my-10">
        <h2 className="title text-2xl dark:text-[#FFF15C] text-blue-800">
          Philosophy:
        </h2>
        <p className="body">
          I firmly believe that the greatest risk we face in software
          development is that of overestimating our own knowledge. Any fool can
          write code that a computer can understand.{" "}
          <span className="text-red-600 dark:text-[#00FFFF]">
            &quot;Good programmers write code that humans can understand.&quot;
          </span>
          This philosophy guides me in my professional life, shaping my approach
          to write easy to understand code with efficient algorithms . In life i
          believe in
          <span className="text-red-600 dark:text-[#00FFFF]">
            &quot;Be Patient and Give your Best&quot;
          </span>
        </p>
      </section>
    </main>
  );
}
export const metadata = {
  title: "About",
  description: "About page of Portfolio",
};

export default About