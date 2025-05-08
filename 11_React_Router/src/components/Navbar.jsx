import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gray-700  border-b-blue-500 text-white h-[66px] flex justify-end items-center px-6'>
    <ul className='flex justify-center items-center space-x-10 text-xl '>


   
      <li className=' active:scale-[0.89] cursor-pointer '>
        <Link to="/">Home</Link>
      </li>
      <li className=' active:scale-[0.89] cursor-pointer '>
        <Link to="/about">About</Link>
      </li>
      <li className=' active:scale-[0.89] cursor-pointer '>
        <Link to="/contact">Contact</Link>
      </li>
     
     

    </ul>
  </nav>
  )
}

export default Navbar