import React from 'react'
import gallery from '../assets/gallery.jpeg'
const HomeRight = () => {
  return (
    <div className='w-full flex justify-center items-center  '>
      <div className='h-70 w-120 '>
        <img src={gallery} alt="" className='h-full w-full rounded-2xl' />
      </div>
    </div>
  )
}

export default HomeRight