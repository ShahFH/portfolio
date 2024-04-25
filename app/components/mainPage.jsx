import React from 'react'
import '../globals.css'

import AnimatedCharacters from '../anim/AnimatedCharacters'

export default function mainPage() {
  return (
    <section className='mx-auto flex flex-col justify-center content-center h-[100vh] lg:mt-28 mt-10'>
      <div className='pl-16'>
        <h1 className='uppercase text-6xl lg:text-[6vw] leading-6 tracking-tight herot'>Creative Front-end</h1>
        {/** this should be in one line the h1 and span */}
        <div className="flex items-center gap-6"> {/* Added a div with flex and items-center */}
          <h1 className='uppercase text-6xl lg:text-[6vw] tracking-tight leading-relaxed herot'>Developer</h1>
          <span className='bg-white  w-32 lg:w-[14vw] h-12 lg:h-[4.6vw] rounded-full mb-1'></span>
        </div>
      </div>
      {/** Marki text */}
      <div>
        <AnimatedCharacters text='Shah Faisal' className='MargiText text-[16vw]' type='heading1' />
      </div>
    </section>
  )
}
