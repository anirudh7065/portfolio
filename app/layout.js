import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Home",
  description: "Home page of my portfolio",
  icons:{
    icon:"./fav.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={cn('bg-black text-white select-none',inter.className)}>
      <Navbar/>
        {children}
        <Footer/>
        <Toaster />
        </body>
    </html>
  );
}
