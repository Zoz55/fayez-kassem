"use client";
import React,{ useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import Skills from './Skills';
import Education from './Education';
import Certificates from './Certificates';


const getContent = (id) => {
  switch (id) {
    case 'skills':
      return <Skills />;
    case 'education':
      return <Education />;
    case 'certificates':
      return <Certificates />;
    default:
      return null;
  }
}

const About = () => {

  const [tab,setTab]= useState("skills");
  const [isPending, startTransition]=useTransition();

  const handleTapChange = (id) =>{
    startTransition(()=>{
      setTab(id);
    });
  }

  return (
    <section className='text-white '>
      <div className='lg:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
        <Image
        src="/images/About.jpg"
        width={500}
        height={500}
        />
        <div className='mt-4 lg:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I'm a software engineer. 
            I'm passionate about building software that solves real-world problems. 
            I have a strong interest in web development, and machine learning. 
            I'm currently working as a software engineer at a tech company ElitesXTech. 
            I'm also a student at ALX studying computer science. 
            I'm always looking for opportunities to learn new things and work on exciting projects. 
            If you're interested in working together, feel free to get in touch. 
            I'd love to hear from you!
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton selectTap={() => handleTapChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTap={() => handleTapChange("education")} active={tab === "education"}>Education</TabButton>
            <TabButton selectTap={() => handleTapChange("certificates")} active={tab === "certificates"}>Certificates</TabButton>
          </div>
          <div className='mt-8'>
            {getContent(tab)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About