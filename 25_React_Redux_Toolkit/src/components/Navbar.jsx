import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full bg-gray-700 h-13 absolute top-0 left-0 right-0 flex justify-center items-center'>
        <ul className='flex justify-center items-center gap-5 text-2xl text-white '>
            <li><Link to='/'>Counter</Link></li>
            <li><Link to='/todo'>Todos App</Link></li>
        </ul>
    </div>
  )
}

export default Navbar