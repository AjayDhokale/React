import React from 'react'
import logo from '../assets/Hostingerlogo.png'
import indiaLogo from '../assets/indiaLogo.png'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center  h-[80px] px-10 font-sans text-sm font-semibold text-gray-700 shadow-[0_0_10px_rgba(128,128,128,0.84)] '>
                <div className='flex justify-center items-center gap-8'>
                    <div>
                        <img className='h-20' src={logo} alt="" />
                    </div>
                    <div>
                        <ul className='flex justify-center items-center gap-6'>
                            <li>Pricing</li>
                            <li>Services</li>
                            <li>Explore</li>
                            <li>Support</li>
                            <li>Horizons</li>
                        </ul>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-3'>
                    <div className='flex gap-1'>
                        <img className='h-5' src={indiaLogo} alt="" />
                        <h1  className='text-black'>English</h1>
                    </div>
                    <div>
                        <button className='text-[#3a89f0] border-3 px-2 py-1 rounded-lg '>Log in</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar