"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";

const ProjectCard = ({
  imgUrl,
  title,
  subtitle,
  desc,
  live,
  stack,
  sources,
}) => {
  const { toast } = useToast();
  const notifySource = () =>
    toast({
      title: "Source is not available",
    });
  const notifyLive = () =>
    toast({
      title: "Website is not live",
    });
  return (
    <div className="card border-[1px] border-purple-500 h-[70vh] w-[90%] md:w-[80%] mb-4 grid grid-cols-1 grid-rows-8 ">
      <div className="top w-full row-span-1  bg-purple-900 content-center">
        <div className="title h-1/3 my-1 text-2xl font-extrabold text-center">
          {title}
        </div>
        <div className="sub h-1/3 text-lg font-bold text-center">
          {subtitle}
        </div>
      </div>
      <Image
        className="w-full row-span-3"
        src={imgUrl}
        alt={`image of ${title} project`}
        width={500}
        height={500}
      />
      <div className="content leading-7 row-span-3">
        <div className="desc h-1/2 mx-2 my-2 text-sm md:text-lg">{desc}</div>
        <div className="stack py-2 flex flex-wrap mx-2 text-sm md:text-lg content-center">
          Stack :-
          {stack.map((item, index) => {
            return (
              <div
                key={index}
                className=" mx-2 my-1 bg-yellow-300 text-black px-2 rounded-full"
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="row-span-1 btns flex justify-between items-end mx-2">
        {live === "" ? (
          <button
            className="live bg-blue-600 rounded-xl px-2 my-2"
            onClick={notifyLive}
          >
            Live
          </button>
        ) : (
          <button className="live bg-blue-600 rounded-xl px-2 my-2">
            <Link href={live} target="_blank">
              Live
            </Link>
          </button>
        )}
        {sources === "" ? (
        <button className="source bg-blue-600 rounded-xl px-2 my-2" onClick={notifySource}>
            Source
        </button>
        ): (
        <button className="source bg-blue-600 rounded-xl px-2 my-2">
          <Link href={sources} target="_blank">
            Source
          </Link>
        </button>
        ) }
      </div>
    </div>
  );
};

export default ProjectCard;
