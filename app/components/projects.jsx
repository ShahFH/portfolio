import React from 'react'
import Image from 'next/image'

export default function projects() {
  return (
    <div className=' mx-auto w-[1224px] h-[100vh] '>

    <div className='Project-card w-full gap-12 md:flex-row lg:flex'>
        {/** side 1 */}
        <div className='img w-1/2 h-[80vh] bg-white rounded-2xl overflow-hidden'>
        </div>
        {/** side 2 */}
        <div className='content-box w-1/2 h-[80vh] flex flex-col justify-end content-end'>
         <h1 className=' text-4xl tracking-tight font-[Work Sans]'>Project Name</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Id, natus.</p>
         </div>
    </div>
    </div>
  )
}
