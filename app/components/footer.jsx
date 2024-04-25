"use "
import React from 'react'
import AnimatedLink from '../anim/AnimatedLink'

export default function footer() {
  return (
    <div className=" flex w-full justify-between content-between text-white px-10">
        <div className='flex gap-6'>
        <p className='logo text-[6vw]'>Shah</p>
        <div className=' flex flex-col justify-center content-end linksfont'>
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
