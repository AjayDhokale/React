import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-[#212121] p-6'>
            <ul className='flex px-15 justify-center gap-15 text-2xl'>
                <li className="cursor-pointer hover:underline active:text-orange-300">
                    <Link to='/'>Home</Link>
                </li>
                <li className="cursor-pointer hover:underline active:text-orange-300">
                    <Link to='/about'>About</Link>
                </li>
                <li className="cursor-pointer hover:underline active:text-orange-300">
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar