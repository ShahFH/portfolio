import React from 'react'
import '../globals.css'
import TextReveal from '../anim/TextReveal'

export default function service() {
  return (
    <div data-scroll-container id='services' className="">
        <section data-scroll-section data-scroll  data-scroll-speed=".2" className="smooth-content">
          <div className=' grid md:grid-cols-2 mx-auto justify-center px-10 md:px-52'>
            <h1 className='text-start text-[8vw] tracking-tighter font-semibold'>Ŵeb Đevelopment</h1>
            <p className='text-base font-medium text-secondary-50 opacity-75'>I specialize in crafting custom websites that reflect your brand, focusing on scalability, performance, accessibility, and engaging animations. 
            I bring your vision to life with precision and innovation.</p>
          </div>
        </section>

        <section data-scroll-section data-scroll  data-scroll-speed=".2" className="smooth-content">
        <div className=' grid md:grid-cols-2 mx-auto justify-center px-10 md:px-52'>
            <h1 className='text-start text-[8vw] tracking-tighter font-semibold'>Ŵeb Design</h1>
            <p className='text-base font-medium text-secondary-50 opacity-75'>As a creative visionary in the digital realm, I specialize in web design, where I blend artistry with functionality to craft captivating online experiences. 
            I bring designs to life that not only look stunning but also impactful, prioritize user needs and business objectives that leave a lasting impression.</p>
          </div>
        </section>
    </div>
  )
}
