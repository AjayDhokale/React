import React from 'react'
import Courses from './Courses'

import javaLogo from '../assets/Java-Logo.png'
import MERNLogo from '../assets/MERNstack.png'
import MEANLogo from '../assets/MEAN.png'
import DotnetLogo from '../assets/dotnet.jpg'



const AllCourses = () => {

    const courses = [
        {
            pic: javaLogo,
            courseName: "Java Full Stack Development",
            duration: "Duration : 4 Months",
            project: "Live Project : 2 Month",
            color: "text-[#4f4fba] font-bold px-5 mt-3 py-2 border-2 cursor-pointer  hover:bg-[#4f4fba] hover:text-white transition delay-150 duration-300 ease-in-out",
            fontColor: "text-[#4f4fba] font-bold",
        },
        {
            pic: MERNLogo,
            courseName: "MERN Stack Development",
            duration: "Duration : 4 Months",
            project: "Live Project : 2 Month",
            color: "text-[#c45534] font-bold px-5 mt-3 py-2 border-2 cursor-pointer  hover:bg-[#c45534] hover:text-white transition delay-150 duration-300 ease-in-out",
            fontColor: "text-[#c45534] font-bold"
        },
        {
            pic: MEANLogo,
            courseName: "MEAN Stack Development",
            duration: "Duration : 4 Months",
            project: "Live Project : 2 Month",
            color: "text-[#28de61] font-bold px-5 mt-3 py-2 border-2 cursor-pointer  hover:bg-[#28de61] hover:text-white transition delay-150 duration-300 ease-in-out",
            fontColor: "text-[#28de61] font-bold"
        },
        {
            pic: DotnetLogo,
            courseName: "Full Stack Dot Net Development",
            duration: "Duration : 4 Months",
            project: "Live Project : 2 Month",
            color: "text-[#d316f0] font-bold px-5 mt-3 py-2 border-2 cursor-pointer  hover:bg-[#d316f0] hover:text-white transition delay-150 duration-300 ease-in-out",
            fontColor: "text-[#d316f0] font-bold"
        },

    ]

    return (
        <div className='mb-10'>
            <div className='font-serif text-center text-[#3c3c65] font-bold text-3xl mb-10 '>Job-Oriented Courses</div>
            <div className='flex gap-2 justify-center  flex-wrap'>

                {
                    courses.map((course) => {
                        return (
                            <Courses pic={course.pic} courseName={course.courseName} duration={course.duration} project={course.project} color={course.color} fontColor={course.fontColor} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default AllCourses