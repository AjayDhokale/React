import React from 'react'

import stud1 from '../assets/student1.png'

// const Student = (props) => {
// const {imgsrc, stdname, company, designation, salary} = props

const Student = ({ imgsrc, stdname, company, designation, salary }) => {

    return (
        <div className='text-center border-2 border-amber-400 rounded-lg w-1/5 p-5'>
            <div className='flex justify-center'>
                <img className='h-30 w-30 rounded-full ' src={imgsrc} alt="" />

            </div>
            <h2 className='my-3'>{stdname}</h2>
            <h3 className='text-[16px] text-gray-500'>{company}</h3>
            <h3 className='text-[16px] text-gray-500'>{designation}</h3>
            <h2 className='text-orange-400 font-bold text-lg my-2'>{salary}</h2>

        </div>
    )
}

export default Student