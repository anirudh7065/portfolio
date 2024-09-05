import ProjectCard from '@/components/ProjectCard'

const page = () => {
  return (
    <main className='flex justify-center flex-col  h-auto  '>
      <h1 className='font-extrabold text-4xl mt-2 mb-2 text-center '>Projects</h1>
      <section className='md:grid md:grid-cols-3 md:grid-rows-1 place-items-center w-full my-10 scroll-smooth flex flex-col '>
        <ProjectCard
          imgUrl='./projects/zolo.png'
          title='ZOlo'
          subtitle='Video Calling'
          desc='It is a video calling app with leets you do instant meetings, schedule meetings,and record meeting and join meeting'
          live='http://zolo.vercel.app'
          sources=''
          stack={['Nextjs', 'Tailwind', 'Shadcn', 'Stream video client', 'Clerk Auth']}
        />
        <ProjectCard
          imgUrl='./projects/passman.png'
          sources='https://github.com/anirudh7065/Password-Manager'
          title='PassMan'
          subtitle='Password Manager'
          desc='It is a password storing application used to store your passwords, edit your password or delete your password'
          live=''
          stack={['Vite', 'Tailwind', 'ReactJs', 'Mongo DB', 'NodeJs', 'ExpressJS']}
        />
        <ProjectCard
          imgUrl='./projects/portfolio.png'
          title='AV'
          subtitle='Portfolio Website'
          sources='https://github.com/anirudh7065/portfolio'
          desc='It is my portfolio website on which you are currently on this stores everything about me as a job aspirant'
          live='https://anirudh7065.github.io/portfolio/'
          stack={['Nextjs', 'Tailwind']}
        />
      </section>
    </main>
  )
}

export default page
