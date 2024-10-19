import Link from 'next/link';
import Image from 'next/image';
import { navs } from '@/constants/constant';
import { Sheet, SheetClose, SheetContent, SheetTrigger,SheetTitle, SheetDescription } from '@/components/ui/sheet';

const MobileNav = () => {
    return (
        <nav className='flex justify-between items-center'>
            <section className="w-full max-w-[264px]">
                <Sheet>
                    <SheetTitle/>
                    <SheetTrigger asChild>
                        <Image
                            src="./icons/hamburger.svg"
                            width={30}
                            height={30}
                            alt="hamburger icon"
                            className="cursor-pointer sm:hidden mt-2 ml-2"
                        />
                    </SheetTrigger>

                    <SheetContent side="left" className="border-none bg-purple-700">
                        <SheetDescription/>
                        <section className=" flex h-full flex-col gap-6 pt-16 text-white">
                            {navs.map((item) => (
                                
                                <SheetClose asChild key={item.name}>
                                <Link
                                    href={'.' + item.url}
                                    className="text-2xl font-bold"
                                    >
                                    {item.name}
                                </Link>
                            </SheetClose>
                                ))}
                        </section>
                    </SheetContent>
                </Sheet>
            </section>
            <Image
                src="./icons/logo.svg"
                width={25}
                height={25}
                alt="ZOlo logo"
                className="cover items-center sm:hidden w-7 h-5 mt-2 mr-2"
            />
        </nav>
    );
};

export default MobileNav;