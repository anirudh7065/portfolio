"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ToastContainer, toast, Slide, Id } from "react-toastify";
import Link from "next/link";


const ProjectCard = ({
  imgUrl,
  title,
  subtitle,
  desc,
  live,
  stack,
  sources,
}) => {
  const [zoomOpen, setZoomOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const descRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (descRef.current) {
      const el = descRef.current;
      setIsClamped(el.scrollHeight > el.clientHeight);
    }
  }, [desc]);


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
    <div className="card border-2 dark:border-dark-1 border-dark-2 dark:bg-dark-0 rounded-2xl  w-[95%] lg:w-100 md:w-87.5 flex flex-col">
      <div className=" bg-dark-2 dark:bg-dark-1 content-center text-white rounded-t-xl">
        <div className="title my-1 text-2xl font-extrabold text-center">
          {title}
        </div>
        <div className="text-lg font-bold text-center">{subtitle}</div>
      </div>
      <Image
        className="w-full h-50 row-span-3 cursor-pointer"
        src={imgUrl}
        alt={`image of ${title} project`}
        width={500}
        height={500}
        onClick={() => setZoomOpen(true)}
      />
      <div className="content">
        <div className="mx-2 my-2 text-sm md:text-lg relative">
          <div
            ref={descRef}
            className={`overflow-hidden transition-all ${isExpanded ? "" : "line-clamp-3"
              }`}
          >
            {desc}
          </div>

          {/* Read more (collapsed state) */}
          {!isExpanded && isClamped && (
            <button
              onClick={() => setIsExpanded(true)}
              className="absolute bottom-0.5 right-0 bg-white dark:bg-dark-0 pl-1 cursor-pointer text-sm font-semibold text-dark-3"
            >
              ...Read more
            </button>
          )}

          {/* Read less (expanded state) */}
          {isExpanded && (
            <button
              onClick={() => setIsExpanded(false)}
              className="mt-1 text-sm font-semibold cursor-pointer text-dark-3"
            >
              Read less
            </button>
          )}
        </div>

        <div className="stack flex flex-wrap gap-2 mx-2 my-4 text-sm md:text-lg min-h-17.5 content-start">
          Stack :-
          {stack.map((item: string, index: number) => {
            return (
              <div
                key={index}
                className="dark:bg-dark-1 bg-dark-2 text-white px-2 rounded-full"
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between items-end mx-2 mb-4 ">
        <Link
          className="live bg-dark-1 text-white dark:bg-dark-2 rounded-2xl px-3 py-1"
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
        </Link>
        <Link
          className="source bg-dark-1 text-white dark:bg-dark-2 rounded-2xl px-3 py-1"
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
        </Link>
      </div>
      {zoomOpen && (
        <div
          className="fixed inset-0 z-400 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setZoomOpen(false)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imgUrl}
              alt="Zoomed project"
              className="rounded-lg object-contain max-h-[85vh] max-w-[85vw]"
            />

            <button
              onClick={() => setZoomOpen(false)}
              className="absolute top-2 right-3 w-8 h-8 rounded-full bg-black text-white font-bold shadow-white shadow-sm flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default ProjectCard;
