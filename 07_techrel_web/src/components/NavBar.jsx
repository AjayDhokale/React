import React from 'react'

import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center h-15 px-36 py-2 shadow-sm shadow-gray-600'>
        
        <div className='h-full '>
            <img src={logo} alt="" className='h-full' />
        </div>

        <div >
            <ul className=' flex items-center gap-10 font-medium text-sm'  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }} >
                <li className='cursor-pointer hover:text-[#ff9933]'>Home</li>
                <li className='cursor-pointer hover:text-[#ff9933]'>About</li>
                <li className='cursor-pointer hover:text-[#ff9933]'>Placed Students</li>
                <li className='cursor-pointer hover:text-[#ff9933]'>Courses</li>
                <li className='cursor-pointer hover:text-[#ff9933]'>Campus Drive</li>
                <li className='cursor-pointer hover:text-[#ff9933]'>Mock Test</li>
                <li className='cursor-pointer hover:text-[#ff9933]'>Contact</li>
            </ul>
        </div>

    </div>
  )
}

export default NavBar