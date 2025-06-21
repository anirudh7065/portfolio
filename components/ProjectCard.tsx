"use client";
import React from "react";
import Image from "next/image";
import { ToastContainer, toast,Slide, Id } from "react-toastify";


const ProjectCard = ({
  imgUrl,
  title,
  subtitle,
  desc,
  live,
  stack,
  sources,
}) => {
  const notify = (msg : string) : Id =>
    toast(msg, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });
  return (
    <div className="card border-[2px] dark:border-dark-1 border-yellow-400 dar:bg-slate-950 rounded-xl overflow-hidden w-[95%] lg:w-[400px] md:w-[350px] flex flex-col">
      <div className=" bg-yellow-400 dark:bg-dark-1 content-center">
        <div className="title my-1 text-2xl font-extrabold text-center">
          {title}
        </div>
        <div className="text-lg font-bold text-center">{subtitle}</div>
      </div>
      <Image
        className="w-full h-[200px] row-span-3"
        src={imgUrl}
        alt={`image of ${title} project`}
        width={500}
        height={500}
      />
      <div className="content">
        <div className="mx-2 my-2 text-sm md:text-lg min-sm:h-[70px] overflow-auto">
          {desc}
        </div>
        <div className="stack flex flex-wrap gap-2 mx-2 my-4 text-sm md:text-lg min-h-[70px] content-start">
          Stack :-
          {stack.map((item: string, index: number) => {
            return (
              <div
                key={index}
                className="dark:bg-[#FFF15C] bg-green-500 text-black px-2 rounded-full"
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between items-end mx-2 my-4 ">
        <a
          className="live bg-red-400 dark:bg-dark-2 rounded-xl px-2"
          href={live ? live : "#"}
          target={live ? "_blank" : undefined}
          rel={live ? "noopener noreferrer" : undefined}
          onClick={(e) => {
            if (!live) {
              e.preventDefault();
              notify("Website is not available");
            }
          }}
        >
          Live
        </a>
        <a
          className="source bg-red-400 dark:bg-dark-2 rounded-xl px-2"
          href={sources ? sources : "#"}
          target={sources ? "_blank" : undefined}
          rel={sources ? "noopener noreferrer" : undefined}
          onClick={(e) => {
            if (!sources) {
              e.preventDefault();
              notify("Source code is not available");
            }
          }}
        >
          Source
        </a>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProjectCard;
