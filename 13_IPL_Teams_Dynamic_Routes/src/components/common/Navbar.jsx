import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-13 w-full border-2 flex justify-center bg-gradient-to-r from-[#ffd0d0] via-[#800080] to-[#ff9bac]  '>
      <ul className='flex justify-center items-center gap-8'>
        <li className='font-bold text-white tracking-wider'>
          <Link to="/">Home</Link>
        </li>
        <li className='font-bold text-white tracking-wider'>
          <Link to="/allteams">All Teams</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar