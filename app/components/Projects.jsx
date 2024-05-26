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
    <>
      <div className='w-full'>

        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
          My Projects
        </h2>

        <div className="text-white grid grid-cols-2 justify-center items-center gap-2 py-6 lg:flex lg:flex-row">
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
    </>
  )
}

export default Projects