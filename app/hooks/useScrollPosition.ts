import { useState, useEffect } from "react";

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Check window exists (it will in client)
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Call handler once to set initial position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}
