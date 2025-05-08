import React from 'react'
import { SlEnvolope } from "react-icons/sl";
import { FaMobileScreen } from "react-icons/fa6";



const OrangePatti = () => {
    return (


        <div className='bg-[#ff9933] flex justify-between px-6 py-1 font-medium'>
            <div className='flex gap-10'>
                <div className='flex justify-between items-center gap-1 text-center'>
                    <SlEnvolope />
                    <a href="">info@techrel.in</a>
                </div>

                <div className='flex justify-between items-center gap-1 text-center'>
                    <FaMobileScreen />
                    <a href="">+91 71238 91821</a>
                </div>
            </div>

            <div>New Batch Starting From 10-April-2025</div>
            <div>Since 2006</div>
        </div>

    )
}

// <i class="bi bi-envelope d-flex align-items-center"></i>

// <i class="bi bi-phone d-flex align-items-center ms-4"></i>

export default OrangePatti