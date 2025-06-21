"use client";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";

export default function BackToTopButton() {
  const scrollY = useScrollPosition();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (scrollY < 100) return null; // show button after scrolling 100px

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-[50px] right-5 w-10 h-10 border-[1px] border-black dark:bg-dark-1 bg-yellow-400 dark:text-white rounded-full shadow-2xl z-50"
    >
      ↑
    </button>
  );
}
