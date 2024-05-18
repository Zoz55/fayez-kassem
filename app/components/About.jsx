"use client";
import React,{ useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAP_DATA =[
  {
    title: "Skills",
    id: "skills",
    content:(
      <ul className='list-disc pl-8'>
        <li><span className='font-semibold'>Basic:</span> HTML, CSS, JavaScript.</li>
        <li>Version Control: Git, GitHub.</li>
        <li>Styling: Bootstrap, Tailwind.</li>
        <li>Frameworks: Next, Svelte, Blazor.</li>
        <li>Machine Learning.</li>
        <li>Programming Languages: C++, C#, Java, JavaScript, Python.</li>
        <li>Backend: .NET, Node.js</li>
        <li>Design: Figma.</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content:(
      <ul>
        <li>ALX The Room and Explore AI: </li>
        <li>• Data Science 42 weeks program</li>
        <li>Faculty of Electronic Engineering, Menoufia University</li>
        <li>• Bachelor's degree in Electronic Engineering.</li>
        <li>• Department: Computer Science and Engineering</li>
        <li>• Major: Software Engineering</li>
      </ul>
    )
  },
  {
    title: "Certificates",
    id: "certificates",
    content:(
      <ul className='list-disc pl-8'>
        <li><a href="https://www.linkedin.com/learning/certificates/e260bf4e4dc96c8bb43a77bfc01d51f2a05b238536ece7229144ee1362d3f823?trk=share_certificate">JavaScript Essential Training</a></li>
        <li><a href="https://www.linkedin.com/learning/certificates/5fdb31d63964cc83f41d53cfc8a33a50fde4cba4a9e1017fab2ccaebfa5ec07b?trk=share_certificate">Learning ECMAScript 6+ (ES6+)</a></li>
        <li><a href="https://www.linkedin.com/learning/certificates/7b701097c10951619ccff8094e74b80f8de1983a556929fc5966229cda8fcd2d">Git Essential Training</a></li>
        <li><a href="https://www.linkedin.com/learning/certificates/7fa22a64566effe971d77aa6e8b4977c562870f9761f12cef5be110a19f9a94b?trk=share_certificate">React.js Essential Training</a></li>
        <li><a href="https://www.linkedin.com/learning/certificates/d62f6a5ea4aa31b97f73e8967b420431e9fa12e8df7e1adf119c992edf349fc2?trk=share_certificate">Node.js Essential Training</a></li>
        <li><a href="https://www.linkedin.com/learning/certificates/c5c61a31f7ff20de559259ba9445450f586ca99a264786c8d4eabd1445e04809?trk=share_certificate">SQL Essential Training</a></li>
        <li><a href="https://www.linkedin.com/learning/certificates/caeea4b672ec17207618a84ea3c19ad3aa96b600455b5f4c3e5af52e8f1429df">Become a Full-Stack Web Developer</a></li>
        <li><a href="https://freecodecamp.org/certification/fayezkassem/foundational-c-sharp-with-microsoft">Foundational C# with Microsoft</a></li>
      </ul>
    )
  }
]

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
        src="/images/About.png"
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
            {TAP_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About