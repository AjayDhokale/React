import React, { useEffect } from 'react'

import { FaUserGraduate } from 'react-icons/fa';
import { FaProjectDiagram } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";



const HomeBottom = () => {

    useEffect(() => {
        let iconBottom = document.querySelectorAll('.iconBottom')
        // console.log(iconBottom);
        
        
        
        iconBottom.forEach((icon,index) => {
            
            let iconInner = document.querySelectorAll('.innericon')
            let iconLogo = document.querySelectorAll('.icon')

            console.log(iconInner);
            console.log(iconLogo);

            icon.addEventListener('mouseenter', () => {
                console.log(iconInner[index]);
                
                iconInner[index].style.background = "orange"
                iconLogo[index].style.color = "white"
            })



            icon.addEventListener('mouseout', () => {
                iconInner[index].style.background = "white"
                iconLogo[index].style.color = "orange"

            })
        })

    },[]);

    // const handleMouseEnter = () => {
    //     console.log('Mouse entered!');
    //   };

    
    
    return (
        <div id='temp' className='shadow-[0_4px_10px_rgba(128,128,128,0.80)] bg-[#ffffff] flex justify-center items-center h-35 rounded-3xl mx-10 overflow-hidden'>

            <div  className='iconBottom text-[#3c3c65] font-semibold font-serif flex gap-3 px-4 w-full h-full justify-center items-center '>
                <div className='innericon bg-orange-50 flex justify-center items-center p-5 rounded-full'>
                    <FaUserGraduate className='icon text-2xl text-orange-400' />
                </div>
                <div >Global Certificate</div>
            </div>

            <div   className='iconBottom text-[#3c3c65] font-semibold font-serif flex gap-3 px-4 w-full h-full justify-center items-center'>
                <div   className='bg-orange-50 flex justify-center items-center p-5 rounded-full'>
                    <FaProjectDiagram  className='text-2xl text-orange-400' />
                </div>
                <div >Live Projects Training</div>
            </div>

            <div   className='iconBottom text-[#3c3c65] font-semibold font-serif flex gap-3 px-4 w-full h-full justify-center items-center'>
                <div  className='bg-orange-50 flex justify-center items-center p-5 rounded-full'>
                    <FaHeadset className='text-2xl text-orange-400' />
                </div>
                <div>1:1 Doubt Solving</div>
            </div>

            <div   className='iconBottom text-[#3c3c65] font-semibold font-serif flex gap-3 px-4 w-full h-full justify-center items-center'>
                <div  className='bg-orange-50 flex justify-center items-center p-5 rounded-full'>
                    <IoChatbubblesOutline className='text-2xl text-orange-400' />
                </div>
                <div>Interview Preparation</div>
            </div>

        </div>
    )
}

export default HomeBottom
