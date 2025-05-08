import React from 'react'

import javaLogo from '../assets/Java-Logo.png'

const Courses = ({pic,courseName,duration,project,color, fontColor}) => {
  return (
    <div className='text-center mx-5 my-2 shadow-[0_0_15px_rgba(128,128,128,0.52)]'>


      <div className=' w-100 h-50 flex justify-center'>
        <div className='h-full w-full p-4  object-cover'>
          <img src={pic} alt="" className='h-full w-full  ' />
        </div>
        
        <div className='w-full p-5 flex  font-serif items-center  flex-col'>
          <h1 className={fontColor}>{courseName}</h1>
          <p className='text-[16px] mt-3' >{duration}</p>
          <p className='text-[16px] '>{project}</p>
          <button className={color}>Enroll Now</button>
        </div>
      </div>
      


    </div>
  )
}

export default Courses