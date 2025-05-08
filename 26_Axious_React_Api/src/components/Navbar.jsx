import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='absolute top-0 left-0 right-0 bg-gray-900 text-white h-20 flex justify-center items-center '>
            <ul className='flex justify-evenly items-center gap-5 text-2xl capitalize font-serif '>
                <li>
                    <Link to='/' >Posts</Link>
                </li>
                <li>
                    <Link to='/users'>Users</Link>
                </li>
                <li>
                    <Link to='/dictionery'>Dictionery</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar