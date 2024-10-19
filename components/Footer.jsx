import Image from 'next/image'
import Link from 'next/link'
import { socials } from '@/constants/constant'

const Footer = () => {
    return (
      <footer className="bg-purple-900 text-black font-bold gap-3 justify-center flex items-center w-full h-8 fixed bottom-0 select-none">
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
                />
              </Link>
            </span>
          ))}
        </div>
      </footer>
    );
}

export default Footer
