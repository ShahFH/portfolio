'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import '../globals.css'
import gsap from 'gsap';
import TextReveal from '../anim/TextReveal';

export default function Projects() {

  return (
    <div id='project' className="mx-8 md:mx-8 lg:mx-16 mt-10 h-full my-52 grid justify-center items-center">
      {/** Card 1 */}
      <div className="grid md:grid-cols-2 pt-15 mb-16 ">
        {/** Side 1: Image */}
        <div className="img w-fit lg:w-full h-[60vh] lg:h-[80vh] rounded-xl transition-transform hover:scale-95 duration-500 hover:duration-700 overflow-hidden">
        <a  href='https://shahblogg.netlify.app/'>
           <Image className=' w-full h-full object-cover transition-transform hover:scale-110 duration-500 group-hover:duration-1000' src="/blog.png" width={663} height={369} alt='Project Photo'/>
           </a>
        </div>
        {/** Side 2: Title and Description */}
        <div className="content-box flex flex-col justify-start md:justify-end p-8">
          <TextReveal className=" text-3xl tracking-tight font-[Work Sans] mb-4" title="Blog Website" />
            
          <p className=" text-[#9b9b9b]">
            Web Development, Astro, React, Tailwind
          </p>
        </div>
      </div>

    {/** Card  2 */}
    <div className="grid md:grid-cols-2 pt-15">
        {/** Side 2: Title and Description */}
        <div className="content-box flex flex-col justify-end items-start md:items-end p-8 order-2 md:order-1">
        <TextReveal className=" text-3xl tracking-tight font-[Work Sans] mb-4" title="BG-Strip Web App" />
        <p className=" text-[#9b9b9b]">
            Web Design & Development, Framer-motion, React, Tailwind
          </p>
        </div>

        {/** Side 1: Image */}
        <div className="img w-fit lg:w-full h-[60vh] lg:h-[80vh] rounded-xl transition-transform hover:scale-95 duration-500 hover:duration-700 overflow-hidden md:order-2 order-1">
           <a href='https://bgstrip.netlify.app/'>
           <Image className=' w-full h-full object-cover transition-transform hover:scale-110 duration-500 group-hover:duration-1000' src="/bg.png" width={663} height={369} alt='Project Photo'/>
           </a>
        </div>
      </div>

      {/** Card 3 */}
      <div className="grid md:grid-cols-2 pt-15 mb-16 pt-14">
        {/** Side 1: Image */}
        <div className="img w-fit lg:w-full h-[60vh] lg:h-[80vh] rounded-xl transition-transform hover:scale-95 duration-500 hover:duration-700 overflow-hidden">
        <a  href='https://xploree.netlify.app/'>
           <Image className=' w-full h-full object-cover transition-transform hover:scale-110 duration-500 group-hover:duration-1000' src="/xplore.png" width={663} height={369} alt='Project Photo'/>
           </a>
        </div>
        {/** Side 2: Title and Description */}
        <div className="content-box flex flex-col justify-start md:justify-end p-8">
        <TextReveal className=" text-3xl tracking-tight font-[Work Sans] mb-4" title="Xplore Travel Companion" />
          <p className=" text-[#9b9b9b]">
            Web Development, React, Web Design
          </p>
        </div>
      </div>

      {/** Card  4 */}
    <div className="grid md:grid-cols-2 pt-15">
        {/** Side 2: Title and Description */}
        <div className="content-box flex flex-col justify-end items-start md:items-end p-8 order-2 md:order-1">
        <TextReveal className=" text-3xl tracking-tight font-[Work Sans] mb-4" title="Portfolio" />
          <p className=" text-[#9b9b9b]">
            Web Design & Development, Framer-motion, React, Tailwind
          </p>
        </div>

        {/** Side 1: Image */}
        <div className="img w-fit lg:w-full h-[60vh] lg:h-[80vh] rounded-xl transition-transform hover:scale-95 duration-500 hover:duration-700 overflow-hidden md:order-2 order-1">
           <a href='https://shahfhportfolio.netlify.app/'>
           <Image className=' w-full h-full object-cover transition-transform hover:scale-110 duration-500 group-hover:duration-1000' src="/portfolio.png" width={663} height={369} alt='Project Photo'/>
           </a>
        </div>
      </div>
    </div>
  );
}
