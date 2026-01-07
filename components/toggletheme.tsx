// components/ThemeToggle.js
"use client";
import { useState,useEffect } from "react";
import { usePathname } from "next/navigation";
import {MoonIcon, SunIcon} from "lucide-react"

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
      className={`p-2 max-sm:bg-dark-1 max-sm:dark:bg-dark-2 dark:bg-dark-1 bg-dark-2 text-white  rounded-full size-10  flex items-center justify-center black-outline-text dark:border border-black`}
    >
      {theme === "dark" ? <MoonIcon /> : <SunIcon/>}
    </button>
  );
}
