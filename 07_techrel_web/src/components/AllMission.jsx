import React from 'react'
import Mission from './Mission'

const AllMission = () => {

    const missions = [
        {
            name: "Guaranteed Placement Assistance",
            des: "100% placement support with top IT companies. Resume building & interview preparation. Regular job drives."
        },
        {
            name: "Industry-Focused Training",
            des: "Expert-led courses with real-world case studies. Hands-on learning with the latest IT tools & Skill development."
        },
        {
            name: "Live Projects & Internships",
            des: "Work on real-time projects to gain practical experience Internship opportunities for hands-on learning. Get industry exposure before a job."
        },
        {
            name: "Certification & Career Growth",
            des: "Industry-recognized certifications to boost credibility. Career mentorship & skill enhancement programs to guide your professional journey."
        },
    ]

    // console.log(missions[1]);



    return (
        <div className=''>

            <div className='bg-[#f2f2fe] h-130 '>
            <div className='text-orange-400   text-center mb-5 font-serif font-bold text-3xl'>Our Mission</div>
                <div className='text-center flex flex-col justify-center  items-center'>


                    <div className='font-serif text-center text-[#3c3c65] font-bold text-lg mt-5 '>Skills That Set You Apart, Training That Gets You Hired !</div>
                    <div className='font-serif text-center text-[#5c5ca4] font-bold text-[16px] w-180'>At TechRel, we equip you with industry-relevant skills through expert-led training and hands-on projects
                        With 100% placement assistance, we help you connect with top IT companies and land your dream job.</div>
                </div>
                <div className='flex mt-10 justify-center items-center'>
                    {

                        missions.map((mis) => {
                            console.log(mis);

                            return (
                                <Mission name={mis.name} des={mis.des} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AllMission