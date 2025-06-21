import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from "react-toastify";
import { cn } from "@/lib/utils";
import BackToTopButton from "@/components/BacktoTopButton"
import { cookies } from "next/headers";

export const metadata = {
  title: "Home",
  description: "Home page of my portfolio",
  author: "Abhishek Valsan",
  icons: {
    icon: "./fav.png",
  }
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "light";
  const isDark = theme === "dark";
  return (
    <html lang="en" className={isDark ? "dark" : ""}>
      <body
        className={cn(
          "dark:bg-[#1e2120] dark:text-white text-black bg-white select-none h-screen ",
          inter.className
        )}
      >
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
        <BackToTopButton />
      </body>
    </html>
  );
}
