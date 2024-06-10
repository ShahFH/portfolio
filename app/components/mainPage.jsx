import React from 'react'
import '../globals.css'
import AnimatedCharacters from '../anim/AnimatedCharacters'
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function mainPage() {

  return (
    <section className='mx-auto flex flex-col justify-center content-center h-[100vh] lg:mt-48 mt-40'>
      <div className='pl-16'>
        <h1 className='uppercase text-5xl lg:text-[6vw] leading-6 tracking-tight herot'>Creative Front-end</h1>
        {/** this should be in one line the h1 and span */}
        <div className="flex items-center gap-6"> {/* Added a div with flex and items-center */}
          <h1 className='uppercase text-5xl lg:text-[6vw] tracking-tight leading-relaxed herot'>Developer</h1>
          <motion.span initial={{width: "69px"}} animate={{width: "14vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}  className='bg-white  w-32 lg:w-[14vw] h-10 lg:h-[4.6vw] rounded-full mb-1  flex justify-end items-center'> <Image className=' pr-1 transition-transform hover:scale-90 w-[36px] md:w-[4.4vw] h-9 md:h-[4.2vw]' src="/ProfileCircle.png" alt='Profile-icon'  width={68} height={68} /> </motion.span>
        </div>
      </div>
      {/** Marki text */}
      <div>
      <Marquee >
        <AnimatedCharacters text='Shah Faisal' className='MargiText text-[300px]' type='heading1' /></Marquee>
      </div>
    </section>
  )
}
