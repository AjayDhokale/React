import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <nav className='bg-gray-700  border-b-blue-500 text-white h-[66px] flex justify-end items-center px-6'>
      <ul className='flex justify-center items-center space-x-10 text-xl '>


     
        <li className=' active:scale-[0.89] cursor-pointer '>
          <Link to="/html">HTML</Link>
        </li>
        <li className=' active:scale-[0.89] cursor-pointer '>
          <Link to="/css">CSS</Link>
        </li>
        <li className=' active:scale-[0.89] cursor-pointer '>
          <Link to="/javascript">JavaScript</Link>
        </li>
        <li className=' active:scale-[0.89] cursor-pointer '>
          <Link to="/react">React</Link>
        </li>
        <li className=' active:scale-[0.89] cursor-pointer '>
          <Link to="/tailwind">Tailwind</Link>
        </li>
        <li className=' active:scale-[0.89] cursor-pointer '>
          <Link to="/bootstrap">BootStrap</Link>
        </li>
       

      </ul>
    </nav>

  )
}

export default Navbar