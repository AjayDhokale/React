import React from 'react'

const Sidebar = () => {
  return (
    <div className=' bg-[#e2f2fe] border-4 border-[#55b8fe] border-t-0 fixed left-0 top-15 h-[100%] w-60'>
      <div className=' flex flex-col items-start gap-5 text-xl pl-10 py-10 '>
        <div className='cursor-pointer'>Dashboard</div>
        <div className='cursor-pointer'>Home</div>
        <div className='cursor-pointer'>About</div>
        <div className='cursor-pointer'>Services</div>
        <div className='cursor-pointer'>Forms</div>
        <div className='cursor-pointer'>Settings</div>
        <div className='cursor-pointer'>Support</div>
      </div>
    </div>
  )
}

export default Sidebar