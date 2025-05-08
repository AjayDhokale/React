import React from 'react'
import { FiBox  } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";

import { IoMenu } from "react-icons/io5";



const Navbar = () => {
  return (
    <div className=' fixed top-0 left-0 right-0 h-15 px-8 bg-[#e2f2fe] border-4 border-[#55b8fe] flex justify-between items-center'>
      <div className='flex  items-center text-xl gap-10  w-full h-full'>
        <div className='text-2xl cursor-pointer '> <IoMenu /> </div>
        <div className='text-2xl cursor-pointer  flex justify-center items-center gap-1 '> <FiBox  className=' ' /> <h1>Simple </h1> </div>
        
      </div>

      <div className='flex  items-center text-xl   w-full h-full'>
        <div className=' w-full'>
          <input type="text" name="" id="" placeholder='Search here...' className='border border-gray-500 rounded px-4 py-1 outline-none w-full ' />
        </div>
        <div className='text-2xl cursor-pointer ml-[-40px] z-10 active:scale-90' > <cFaSearch /> </div>
      </div>

      <div className='flex justify-end items-center text-xl gap-10  w-full h-full'>
        
        <div className='text-2xl cursor-pointer '> <MdOutlineLightMode /></div>
        <div className='text-2xl cursor-pointer '> <IoIosNotifications /> </div>
        <div className='text-2xl cursor-pointer '> <CgProfile /> </div>
        <div className='text-2xl cursor-pointer '> <IoMdSettings /> </div>
      </div>

    </div>
  )
}

export default Navbar