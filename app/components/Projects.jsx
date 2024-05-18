"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
  {
    id: 1,
    title: "Trainers Team",
    description: "Website For Trainers Team Academy for Consultations and Training.",
    img: "images/projects/project1.png",
    tag: ["All", "BackEnd"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Trainers Team",
    description: "Website For Trainers Team Academy for Consultations and Training.",
    img: "images/projects/project2.png",
    tag: ["All", "FrontEnd"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Trainers Team",
    description: "Website For Trainers Team Academy for Consultations and Training.",
    img: "images/projects/project3.png",
    tag: ["All", "FrontEnd", "BackEnd"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Trainers Team",
    description: "Website For Trainers Team Academy for Consultations and Training.",
    img: "images/projects/project4.png",
    tag: ["All", "FrontEnd", "BackEnd"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Trainers Team",
    description: "Website For Trainers Team Academy for Consultations and Training.",
    img: "images/projects/project5.png",
    tag: ["All", "FrontEnd", "BackEnd"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Trainers Team",
    description: "Website For Trainers Team Academy for Consultations and Training.",
    img: "images/projects/project6.png",
    tag: ["All", "FrontEnd", "BackEnd"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Trainers Team",
    description: "Website For Trainers Team Academy for Consultations and Training.",
    img: "images/projects/project7.png",
    tag: ["All", "FrontEnd", "BackEnd"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

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
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
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
          />
        ))}
      </div>
    </>
  )
}

export default Projects