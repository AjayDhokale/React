import React, { useEffect } from 'react'

const About = () => {

    
    // useEffect(() => {
    //     console.log('About Component Mounted')
    // },[])


        useEffect(() => {
            console.log('About Component Mounted')
            return() => {
                console.log("About Component Unmounted");   
            }
        },[])
        

  return (
    <div className='h-90 bg-blue-950 flex justify-center items-center '>
        <h1 className=' text-6xl'>About Component</h1>
    </div>
  )
}

export default About