"use client";
import React,{ useTransition, useState } from 'react'
import Link from 'next/link';
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

    <section className='text-white ' id="about">
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-24 items-start py-8 px-4 sm:py-16 xl:px-16'>
        <Image
          src="/images/About.jpg"
          alt='Fayez Kassem Image'
        width={500}
        height={500}
        />
        <div className='mt-4 lg:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
          I&apos;m a Software Engineer driven by a passion for creating solutions that make a real difference. 
          Specializing in web development and machine learning, I bring a blend of technical expertise and creativity to every project. 
          Currently, I&apos;m proud to be part of the talented team at<Link className='hover:text-white text-[#ADB7BE]' href="https://www.linkedin.com/company/ElitesXTech"> ElitesX.Tech </Link> 
          while also honing my skills as a Data Science intern at ExploreAI. 
          I&apos;m always on the lookout for exciting challenges and opportunities to learn and grow. 
          If you&apos;re interested in collaborating, I&apos;d love to connect and explore how we can work together to bring your ideas to life.
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