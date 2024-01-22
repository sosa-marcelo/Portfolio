import type { Metadata } from "next";
import "./globals.css";
import Image, { StaticImageData } from "next/image";

// Components
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import { Header } from "./components/Header/Header";

// Static images
import profile from "@/public/images/profile.webp";
import infoMoviesMockup from "@/public/images/info-movies-mockup.webp";
import brochureMockup from "@/public/images/brochure-mockup.webp";
import { CustomIcon } from "./components/CustomIcon";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

type Project = {
  id: number,
  title: string,
  description: string,
  image: StaticImageData,
  technologies: string[],
  url: string,
  repository: string
}

const projects: Project[] = [
  {
    id: 0,
    title: "My Movies DB",
    description:
      "Web app that lets you get detailed information about any movie you want. It uses an API to obtain its data, which is then shown in multiple ways.",
    image: infoMoviesMockup,
    technologies: ["react", "react router", "tailwind", "tmdb api"],
    url: "https://info-movies-app.vercel.app",
    repository: "https://github.com/MarceloS98/info-movies-app",
  },
  {
    id: 1,
    title: "Portfolio website",
    description:
      "Replica of a template designed by Tooplate. It mainly showcases both my ability to replicate designs and my skill with HTML and CSS. JavaScript was kept to a minimum.",
    image: brochureMockup,
    technologies: ["html", "css", "tailwind", "javascript"],
    url: "https://portfolio-marvel-website.vercel.app/",
    repository: "https://github.com/MarceloS98/Brochure-website",
  },
];

export default function Home() {
  return (
    <>
    {/* Header */}
    <Header/>
    
    {/* Hero section */}
    <section className="w-full bg-white py-16 md:py-32">
      <div className="container mx-auto max-w-4xl md:flex md:items-start">
        {/* Name & Contact */}
        <section
          className="grid w-full shrink-0 place-items-center md:mr-10 md:mt-0 md:w-auto md:place-items-start lg:mr-14"
        >
          <div
            className="mb-5 h-40 w-40 overflow-hidden rounded-full shadow-md shadow-gray-400"
          >
            <Image
              src={profile}
              alt="Marcelo Sosa"
              style={{scale: 1.2}}
            />
          </div>
          <h2 className="mb-5 text-xl font-bold">Marcelo Sosa</h2>
          <div className="mb-3 w-16 border-t-2 border-t-black"></div>
          <div className="mb-1 flex flex-col items-center md:block">
            <span className="block text-lg font-bold">Web developer</span>
            <span>Based in Asunción</span>
          </div>
          {/* Icons */}
          <div className="flex items-center gap-x-1">
            <a
              href="https://www.linkedin.com/in/sosa-marcelo/"
              target="_blank" 
              rel="noopener noreferrer"
              className=""
              >
                <CustomIcon type="linkedin" />
            </a>
            <a 
              href="mailto:sosamarcelo92@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className=""
              >
                <CustomIcon type="email" size="2.8em"/>
            </a>
          </div>
        </section>

        {/* Presentation */}
        <section className="presentation mt-10 md:mt-0">
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl">Hello!</h2>
          <p
            className="mb-7 lg:text-xl"
          >
            I am a web developer with background in design, who enjoys problem-solving and learning new things.
          </p>

          <a
            href="#projects"
            id="view-projects"
            className="mb-7 inline-block rounded-full border bg-black px-7 py-2 font-bold text-white transition-colors duration-200 hover:border-black hover:bg-transparent hover:text-black"
          >
            View My Projects
          </a>

          <p className="leading-8 tracking-wide">
            {`I'm enthusiastic about learning and continually exploring new ways to advance my capabilities. As a web developer, I strive to deliver clean and fully functional websites that meet the user's needs.`}
          </p>
        </section>
      </div>
    </section>

    {/* Projects section */}
    <main className="bg-gray-100 pb-16 lg:pb-32 lg:pt-16">
      <section
        id="projects"
        className="container grid max-w-5xl place-items-center"
      >
        {
          projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))
        }
      </section>
    </main>

      
    </>
  );
}
