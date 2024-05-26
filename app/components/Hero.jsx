"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';



const Hero = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <div className='lg:col-span-2 place-self-center text-center lg:text-left justify-self-start'>
          <div className="flex flex-col gap-4 text-white mb-4 text-[28px] sm:text-5xl xl:text-7xl 2xl:text-8xl leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a599fb] to-[#6049fc]">
              Hello, I&apos;m
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Fayez Kassem',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Software Engineer',
                1000,
                'Data Scientist',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            A passionate Software Engineer and Data Scientist specializing in Full-Stack Development. I&apos;m committed to tackling real-world challenges, pushing boundaries, and delivering innovative solutions. With expertise in JavaScript, React, Node.js, Python, and .NET, I bring a versatile skill set to every project. Let&apos;s collaborate and create something extraordinary together.
          </p>
          <div className="flex gap-5 sm:flex-col flex-wrap">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#a599fb] to-[#6049fc] hover:bg-slate-200 text-black">Hire Me</button>
            <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white">Download My CV</button>
          </div>
        </div>
        <div className='lg:col-span-1 place-self-center'>
          <div className='rounded-full  bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative'>
            <Image
            src="/images/hero-image.png"
            alt='Hero Image'
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            width={350}
            height={350}
            />
          </div>  
        </div>
      </div>
    </section>
  )
}

export default Hero