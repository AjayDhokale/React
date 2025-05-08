import React from 'react'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'
import HomeBottom from './HomeBottom'

const Home = () => {
  return (

    
    <div className='h-[100vh]  px-30 bg-[#fffee8]  '>
        <div className='flex ' >
        <HomeLeft />
        <HomeRight />
      </div>
      <HomeBottom />
    </div>
  )
}

export default Home