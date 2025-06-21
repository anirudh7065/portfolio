import Image from "next/image";
import Link from "next/link";
import { fetchData } from "@/lib/fetchdata";

type Social = {
  name: string;
  url: string;
  icon: string;
};
const Footer = async() => {
  const socials = await fetchData<Social[]>("/api/socials");
  return (
    <footer className="bg-yellow-400 dark:bg-dark-1 dark:text-white  gap-3 justify-center flex items-center w-full h-[30px] fixed bottom-0 z-0 select-none">
      <span>Made By Abhishek valsan</span>
      <div className="social flex">
        {socials.map((item) => (
          <span key={item.name}>
            <Link target="_blank" href={item.url}>
              <Image
                alt={item.name}
                src={item.icon}
                width={25}
                height={25}
                className="dark:invert"
              />
            </Link>
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
