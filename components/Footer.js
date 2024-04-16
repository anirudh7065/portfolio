import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='bg-purple-900 text-black font-bold gap-3 justify-center flex items-center w-full h-8 fixed bottom-0'>
            <span>Made By Abhishek valsan</span>
            <div className="social flex">
                <span>
                    <Image
                        alt='Instagram'
                        src={"./social/instagram.svg"}
                        width={25}
                        height={25}
                        prefetch={true}

                    />
                </span>
                <span>
                    <Image
                        alt='Whatsapp'
                        src={"./social/whatsapp.svg"}
                        width={25}
                        height={25}
                        prefetch={true}

                    />
                </span>
                <span>
                    <Image
                        alt='Linkedin'
                        src={"./social/linkedin.svg"}
                        width={25}
                        height={25}
                        prefetch={true}

                    />
                </span>
                <span>
                    <Image
                        alt='Github'
                        src={"./social/github.svg"}
                        width={25}
                        height={25}
                        prefetch={true}

                    />
                </span>
            </div>
        </footer>
    )
}

export default Footer