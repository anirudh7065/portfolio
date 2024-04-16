import React from 'react'

const page = () => {
  return (
    <main>
      <div className="edu my-10 mx-10">
        <div className="title text-2xl text-purple-600">Educational Journey:</div>
        <div className="body">I hold a degree in BCA from HR Institute of Science and Technology, where I cultivated a deep understanding of Computer Application. My academic background serves as the foundation for my commitment to lifelong learning and staying at the forefront of industry trends. <span className='text-red-400'>My Marksheet :- </span><span>Click Here</span></div>
      </div>
      <div className="edu my-10 mx-10">
        <div className="title text-2xl text-purple-600">Mission and Values:</div>
        <div className="body">Driven by my goal to achieve in life, I&apos;m on a mission to become the best version of myself, I&apos;m dedicated to making a positive impact in the field of Software Development.</div>
      </div>
      <div className="edu my-10 mx-10">
        <div className="title text-2xl text-purple-600">Interests and Hobbies:</div>
        <div className="body">Beyond my professional pursuits, I&apos;m an avid anime otaku, travel enthusiast, and explorer of new topics . Whether I&apos;m coding, watching anime, or simply enjoying the sceneries, you&apos;ll often find me finding something new to experience.</div>
      </div>
      <div className="edu my-10 mx-10">
        <div className="title text-2xl text-purple-600">Philosophy:</div>
        <div className="body">I firmly believe that the greatest risk we face in software development is that of overestimating our own knowledge. Any fool can write code that a computer can understand. <span className='text-red-400'>&quot;Good programmers write code that humans can understand.&quot;</span> This philosophy guides me in my professional life, shaping my approach to write easy to understand code with efficient algorithms . In life i believe in <span className='text-red-400'>&quot;Be Patient and Give your Best&quot;</span></div>
      </div>
    </main>
  )
}
export const metadata = {
  title: "About",
  description: "About page of my portfolio",
};

export default page