"use "
import React from 'react'
import AnimatedLink from '../anim/AnimatedLink'

export default function footer() {
  return (
    <div className=" flex flex-col md:flex-row w-full md:justify-between md:items-end justify-center items-center text-white px-10 pb-6">
        <div className='flex gap-6 flex-col md:flex-row justify-center items-center'>

        <p className='logo text-[6vw]'>Shah</p>

        <div className=' flex flex-row md:flex-col gap-4 md:gap-0 linksfont'>
            <a href='https://twitter.com/ShahFaisal_H'><AnimatedLink title="Twitter" /></a>
            <a href='https://github.com/ShahFH'><AnimatedLink title="Github" /></a>
            <a href='https://shahblogg.netlify.app/'><AnimatedLink title="Blog" /></a>
            <a href='https://www.linkedin.com/in/shah-faisal-h/'><AnimatedLink title="LinkedIn" /></a>
        </div>
        </div>
        <span className='text-[#666] justify-end content-end'>Shah Faisal ©️ copyright 2024</span>
    </div>
  )
}
