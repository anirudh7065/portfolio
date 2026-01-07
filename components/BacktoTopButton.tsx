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
      className="fixed bottom-12.5 right-5 w-10 h-10 border border-black dark:bg-dark-1 bg-dark-2 text-white rounded-full shadow-2xl z-50"
    >
      ↑
    </button>
  );
}
