import React from 'react'
import { FaAward, FaLaptopCode, FaUsersCog } from 'react-icons/fa'
import { FaRegHandshake } from 'react-icons/fa6'

const Mission = ({ name, des }) => {

  // console.log(name, des);



  const missionBg = document.querySelectorAll('.missionBg')
  const h1 = document.querySelectorAll('.h1')
  const p = document.querySelectorAll('.p')



  missionBg.forEach((mission, index) => {
    mission.addEventListener('mouseenter', () => {
      h1[index].style.color = "white"
      p[index].style.color = "white"
      console.log("mouse enters");

    })
  })
  missionBg.forEach((mission, index) => {
    mission.addEventListener('mouseleave', () => {
      console.log("mouse leave");
      h1[index].style.color = "#2d465e"
      p[index].style.color = "#2d465e"
    })

  })



  return (
    <div className=' '>

      <div className=' flex'>
        <div className='missionBg font-serif h-75 w-50 px-3 bg-white rounded-lg mx-5  hover:bg-[#ff9933] '>
          <div className='h-20 w-20  bg-gray-100 rounded-b-2xl flex justify-center items-center text-3xl  '>
            <FaRegHandshake className='text-[#ff9933]' />
          </div>
          <div>
            <h1 className='h1 text-[26px] text-[#2d465e] my-4 '>{name}</h1>
            <p className='p text-[14px] '>{des}</p>
          </div>
        </div>

      </div>
    </div>
       
       
  )
}


export default Mission