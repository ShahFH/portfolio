import React from 'react';
import Image from 'next/image';
import '../globals.css';


export default function About() {
  
  return (
    <div data-scroll-section id='about' className='mt-10 flex flex-col gap-8 md:flex-row lg:gap-10 justify-center items-center mb-32'>

      {/** side 1  */}
      <div data-scroll data-scroll-speed="0.7" className=''>
        <h1 className='SectionHeader ml-28'>About</h1>
        <Image src="/shahprofile.png" alt='Profile-photo' width={368} height={428} />
      </div>
      {/** side 2 */}
      <div className='w-full md:max-w-[35vw] lg:mt-64 p-10 md:p-0'>
        <p className='abouttext font-normal xl:text-2xl text'>
        Hey there, I'm Shah Faisal. Passionate about design and development, I build immersive digital adventures filled with pixels, passion, and plenty of "wow" moments that leave a lasting impression. 
        In this fast-paced digital realm, it's not just about standing out—it's about leaving your mark on the world.
        </p>
      </div>
    </div>
  );
}
