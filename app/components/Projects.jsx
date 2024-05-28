"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import projectsData from './../../public/data/projectData.json' // import the JSON data


const Projects = () => {

  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="px-4 py-8 sm:py-16 xl:px-16">

      <div className='flex flex-col gap-6 '>

        <h2 className='text-center text-4xl font-bold text-white pt-4 pb-8 md:pb-12'>
          My Projects
        </h2>

        <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
            />
          <ProjectTag
            onClick={handleTagChange}
            name="FullStack"
            isSelected={tag === "FullStack"}
            />
          <ProjectTag
            onClick={handleTagChange}
            name="FrontEnd"
            isSelected={tag === "FrontEnd"}
            />
          <ProjectTag
            onClick={handleTagChange}
            name="BackEnd"
            isSelected={tag === "BackEnd"}
            />
          <ProjectTag
            onClick={handleTagChange}
            name="ConsoleApp"
            isSelected={tag === "ConsoleApp"}
            />
        </div>

        <div className='grid lg:grid-cols-3 gap-8 lg:gap-12'>
          {filteredProjects.map((project) =>(
            <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.img}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            technologies={project.technologies}
            />
          ))}
        </div>
      </div>
      </section>
  )
}

export default Projects