import React from 'react';
import '../globals.css';
import TextReveal from '../anim/TextReveal';

export default function Services() {
  return (
    <div data-scroll-container id='services'>
      <section className="smooth-content">
        <div className='grid md:grid-cols-2 gap-8 mx-auto justify-center px-4 sm:px-10 md:px-20 lg:px-32 xl:px-52 max-w-7xl'>
          <h1 className='text-start text-[8vw] sm:text-[6vw] lg:text-[6vw] tracking-tighter font-semibold'>Ŵeb Đevelopment</h1>
          <p className='text-base sm:text-lg lg:text-xl font-normal text-[#a29e9a] leading-relaxed md:leading-loose tracking-wide opacity-80'>
            I specialize in crafting custom websites that reflect your brand, focusing on scalability, performance, accessibility, and engaging animations. 
            I bring your vision to life with precision and innovation.
          </p>
        </div>
      </section>

      <section className="smooth-content">
        <div className='grid md:grid-cols-2 gap-8 mx-auto justify-center px-4 sm:px-10 md:px-20 lg:px-32 xl:px-52 max-w-7xl'>
          <h1 className='text-start text-[8vw] sm:text-[6vw] lg:text-[6vw] tracking-tighter font-semibold'>Ŵeb Design</h1>
          <p className='text-base sm:text-lg lg:text-xl font-normal text-[#a29e9a] leading-relaxed md:leading-loose tracking-wide opacity-80'>
            As a creative visionary in the digital realm, I specialize in web design, where I blend artistry with functionality to craft captivating online experiences. 
            I bring designs to life that not only look stunning but also impactful, prioritize user needs and business objectives that leave a lasting impression.
          </p>
        </div>
      </section>
    </div>
  );
}
