"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';



const Hero = () => {
  return (
    <section className='lg:py-16'>
      <div className=' grid grid-cols-1 lg:grid-cols-12 gap-1'>
        <div className='col-span-8 place-self-center text-center lg:text-left justify-self-start'>
          <h1 className='text-white mb-4 text-[28px] sm:text-5xl xl:text-7xl 2xl:text-8xl leading-normal font-extrabold'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a599fb] to-[#6049fc]">
              Hello, I'm
            </span>
            <br />
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
           </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            Passionate Software Engineer and Data Scientest specializing in Full-Stack Development. Dedicated to solving real-world problems, pushing boundaries, and delivering innovative solutions with expertise in JavaScript, React, Node.js, Python, and .Net.
          </p>
          <div>
            <button className='px-6 py-3 rounded-full w-full md:w-fit  mr-4 bg-gradient-to-r from-[#a599fb] to-[#6049fc] hover:bg-slate-200 text-black'>Hire Me</button>
            <button className='px-6 py-3 rounded-full w-full md:w-fit bg-transparent hover:bg-slate-800 text-white border border-white my-3'>Download My CV</button>
          </div>
        </div>
        <div className='col-span-4 place-self-center mt-4 md:mt-0'>
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