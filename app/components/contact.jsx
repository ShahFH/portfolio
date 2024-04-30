import React from 'react'
import '../globals.css'
import Link from 'next/link'
import AnimatedLink from '../anim/AnimatedLink'

export default function contact() {
  return (
    <div data-scroll-container id='contact' className="min-h-screen flex w-full justify-center items-center text-white flex-col">
        <div className="flex gap-4 flex-col items-center">
        <h1 data-scroll data-scroll-speed="0.1" className="text-center text-[14vw] tracking-tighter inline-flex">
          Let's  <p className='animate-spin-slow px-1'> ✳ </p> Talk
        </h1>
        
        <Link data-module-toggle-scroll
          href="mailto: shahfaisal.swe@gmail.com"
          target="_blank"
          className=" px-6 py-3 bg-transparent text-white border border-white rounded-full w-max hover:bg-[#fff] transition-colors hover:text-black"
        >
          <AnimatedLink title="Contact me" />
        </Link>
      </div>
    </div>
  )
}
