import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { CustomIcon } from '../CustomIcon'
import { title } from 'process';

type ProjectCardProps = {
  id: number,
  title: string,
  description: string,
  image: StaticImageData
  technologies: string[],
  url: string,
  repository: string
}

export const ProjectCard = (project: ProjectCardProps) => {
  return (
    <article className="mt-16 bg-white shadow-lg md:grid md:grid-cols-12 md:gap-2 max-w-[500px] md:max-w-none">
          <div className="relative h-64 w-full md:col-span-5 bg-black md:mb-0 md:h-auto overflow-hidden mb-5">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill={true}
              className="bg-gray-200 object-cover md:object-contain lg:object-cover p-5"/>
          </div>
          <section className="px-5 pb-10 md:py-7 md:col-span-7 md:col-end-13">
            <span className="mb-5 block uppercase tracking-widest text-gray-500">
              {project.technologies.join(" | ")}
            </span>
            <h2 className="mb-5 text-3xl font-extrabold">
              {project.title}
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              {project.description}
            </p>
            <div className="flex items-center justify-between gap-10">
              <a 
                href={project.url} 
                className="inline-block rounded-full border bg-black px-7 py-2 font-bold text-white transition-colors duration-200 hover:border-black hover:bg-transparent hover:text-black" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                  View This Project
              </a>
              <a 
                href={project.repository} 
                className="text-4xl" 
                target="_blank" 
                rel="noopener noreferrer"
                title="View Github repository"
                >
                  <CustomIcon type="github" size="1em"/>
              </a>
            </div>
          </section>
        </article>
  )
}
