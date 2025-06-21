import ProjectCard from "@/components/ProjectCard";
import { fetchData } from "@/lib/fetchdata";

type Project = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  live?: string;
  sources?: string;
  stack: string[];
};
const Projects = async() => {
  const projects = await fetchData<Project[]>("/api/projects");
  return (
    <main className="flex justify-center flex-col  h-auto  ">
      <h1 className="font-extrabold text-4xl mt-2 mb-2 text-center dark:text-[#FFF15C] ">
        Projects
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 grid-cols-gt-1024 lg:gap-10 gap-6 place-items-start justify-items-center w-[95%] mx-auto my-10 scroll-smooth ">
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            imgUrl={item.src}
            title={item.title}
            subtitle={item.subtitle}
            desc={item.description}
            live={item?.live || ""}
            sources={item?.sources || ""}
            stack={item.stack}
          />
        ))}
      </section>
    </main>
  );
};

export default Projects;
