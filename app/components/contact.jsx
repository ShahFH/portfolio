import React from 'react'
import '../globals.css'

export default function contact() {
  return (
    <div className="min-h-screen flex w-full justify-center items-center text-white flex-col">
        <div className="flex gap-4 flex-col items-center">
        <h1 className="text-center text-[14vw] tracking-tighter inline-flex">
          Let's  <p className='animate-spin-slow px-1'> ✳ </p> Talk
        </h1>
        <p className="text-[#666] ">
          Explore your website with this beautiful sticky bottom navigation
          inspired by Awwwards.com.
        </p>
        <a
          href="shahfaisal@"
          target="_blank"
          className=" px-6 py-3 bg-transparent text-white border border-white rounded-full w-max hover:bg-[#fff] transition-colors hover:text-black"
        >
          Contact me
        </a>
      </div>
    </div>
  )
}
