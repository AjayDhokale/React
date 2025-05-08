import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-linear-65 from-purple-500 to-pink-500 border-b-blue-500 font-semibold text-white h-[66px] flex justify-end items-center px-6'>
      <ul className='flex justify-center items-center space-x-10 text-lg '>
            <li>
                <Link to="/">Products</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/books">Books</Link>
            </li>
            <li>
                <Link to="/images">Images</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar