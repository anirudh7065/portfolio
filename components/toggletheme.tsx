// components/ThemeToggle.js
"use client";
import { useState,useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const path = usePathname();

  useEffect(() => {
    const savedTheme = document.cookie.includes("theme=dark")
      ? "dark"
      : "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = async () => {
    const res = await fetch("/theme-toggle", { method: "POST" });
    const data = await res.json();
    setTheme(data.theme);
    document.documentElement.classList.toggle("dark", data.theme === "dark");
  };


  return (
    <button
      type="submit"
      value={path}
      onClick={toggleTheme}
      className={`p-2  dark:bg-dark-1 bg-yellow-400  rounded-full md:w-[40px] md:h-[40px] w-[30px] h-[30px] flex items-center justify-center black-outline-text dark:border-[1px] border-black`}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
