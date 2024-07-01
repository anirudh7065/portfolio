'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useToast } from "@/components/ui/use-toast"




const ProjectCard = ({ imgUrl, title, subtitle, desc, live, stack, sources }) => {
    const { toast } = useToast()
    const notifySource = () => toast({
        title: "Source is not available"
      })
    const notifyLive = () => toast({
        title: "Website is not live"
      })
    return (
        <section className='my-4 mx-4 border-[1px] border-blue-900' key={ title }>
                <div className='bg-purple-900 py-2 text-center '>
                    <div className='text-2xl font-extrabold '>
                        { title }
                    </div>
                    <div className='text-sm font-bold'>
                        { subtitle }
                    </div>
                </div>
                <Image
                    src={ imgUrl }
                    alt={ title }
                    width={ 400 }
                    height={ 350 }
                    className='w-full'
                />
                <div className='my-2 p-2 font-medium text-lg'>
                    { desc }
                </div>
                <div className='my-2 p-2'>
                    <div className='w-full flex flex-wrap items-center'>
                        <span className='text-xl font-extrabold'>Stack : -</span>
                        { stack.map((item) => {
                            return <div className='bg-purple-500 border-2 border-black rounded-full my-1 mx-1 p-2 font-normal ' key={item}>{ item }</div>
                        }) }
                    </div>
                </div>
                <div className='p-2 flex justify-between relative bottom-0'>
                    <div className='px-2 py-1 bg-blue-800 font-normal rounded-lg '>
                    {!!live && <Link href={ live } target='_blank'>Live</Link> || <Link href='' onClick={notifyLive} >Live</Link>} 

                    </div>
                    <div className='px-2 py-1 bg-blue-800 font-normal rounded-lg'>
                        {!!sources && <Link href={ sources } target='_blank'>Source</Link> || <Link href='' onClick={notifySource}>Source</Link>} 
                    </div>
                </div>
        </section>
    )
}

export default ProjectCard
