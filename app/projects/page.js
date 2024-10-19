import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants/constant";

const page = () => {
  return (
    <main className="flex justify-center flex-col  h-auto  ">
      <h1 className="font-extrabold text-4xl mt-2 mb-2 text-center ">
        Projects
      </h1>
      <section className="md:grid md:grid-cols-3 md:grid-rows-1 place-items-center w-full my-10 scroll-smooth flex flex-col ">
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            imgUrl={item.src}
            title={item.title}
            subtitle={item.subtitle}
            desc={item.desc}
            live={item.live}
            sources={item.sources}
            stack={item.stack}
          />
        ))}
      </section>
    </main>
  );
};

export default page;
