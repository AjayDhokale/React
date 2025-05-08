import React, { useEffect } from 'react'

const Contact = () => {


    // useEffect(() => {
    //     console.log('Contact Component Mounted')
    // }, [])


    useEffect(() => {
        console.log('Contact Component Mounted')
        return () => {
            console.log("Contact Component Unmounted");
        }
    }, [])


    return (
        <div className='h-90 bg-gray-950 flex justify-center items-center '>
            <h1 className=' text-6xl'>Contact Component</h1>
        </div>
    )
}

export default Contact