import React from 'react'
import Image from 'next/image'
export default function about() {
  return (
    <div className=' mx-auto w-[1224px] h-[100vh] flex flex-row justify-center items-center'>
    {/** side 1  */}
    <div className=' w-1/2 flex '>
    <h1 className='SectionHeader'>About</h1>
    <Image className=' justify-end content-end' src="/shahprofile.png" alt='Profile-photo' width={368} height={428} />
    </div>
    {/** side 2 */}
    <div className=' w-2/6'>
        <p className=' leading-6 tracking-widest capitalize textp'>Hey there, I'm Shah Faisal, a frontend developer with a knack for creating polished digital experiences. Over the past 2+ years,
        I've honed my skills in HTML, CSS, and JavaScript, specializing in crafting intuitive user interfaces and responsive web designs.
        hether it's optimizing performance or enhancing accessibility, I'm committed to delivering clean, efficient code that brings designs
        to life. Let's collaborate to turn your vision into a seamless reality.</p>
    </div>
    </div>
  )
}
