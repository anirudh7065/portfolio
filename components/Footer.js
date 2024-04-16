import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-purple-900 text-black font-bold gap-3 justify-center flex items-center w-full h-8 fixed bottom-0'>
            <span>Made By Abhishek valsan</span>
            <div className="social flex">
                <span>
                    <Link target='_blank' href={"https://www.instagram.com/anni.raj.002/"}>
                    <Image
                        alt='Instagram'
                        src={"./social/instagram.svg"}
                        width={25}
                        height={25}
                        prefetch={true}
                        
                        />
                    </Link>
                </span>
                <span>
                    <Link target='_blank' href={"https://wa.me/917065958339"}>
                    <Image
                        alt='Whatsapp'
                        src={"./social/whatsapp.svg"}
                        width={25}
                        height={25}
                        prefetch={true}
                        
                        />
                    </Link>
                </span>
                <span>
                    <Link target='_blank' href={"https://linkedin.com/in/abhishek-valsan-7590a6224"}>
                    <Image
                        alt='Linkedin'
                        src={"./social/linkedin.svg"}
                        width={25}
                        height={25}
                        prefetch={true}
                        
                        />
                    </Link>
                </span>
                <span>
                    <Link target='_blank' href={"https://github.com/anirudh7065"}>
                    <Image
                        alt='Github'
                        src={"./social/github.svg"}
                        width={25}
                        height={25}
                        prefetch={true}
                        
                        />
                    </Link>
                </span>
            </div>
        </footer>
    )
}

export default Footer