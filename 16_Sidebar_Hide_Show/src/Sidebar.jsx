import React, { useState } from 'react'
import './Sidebar.css'
import { TfiMenu } from "react-icons/tfi";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

const Sidebar = () => {

  const [showSidebar, setShowSidebar] = useState('show')

  const toggleClass = () => {
    setShowSidebar(showSidebar == 'show' ? 'hide' : 'show')
    
  }

  return (
    <div>
      <div className={`relative sidebar ${showSidebar}  w-60 h-screen pl-10`} >
        <button className='absolute top-5 right-5 z-10 text-[26px] cursor-pointer' onClick={toggleClass} ><TfiMenu /></button>
        <div className='flex justify-start items-center '>
          <ul className='text-2xl flex justify-center flex-col gap-5 mt-20'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar  
