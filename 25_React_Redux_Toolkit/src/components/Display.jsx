import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {

    const count = useSelector((state) => state.count.value ) 

  return (
   
      <div className=' px-5 py-3 text-6xl font-bold w-30  text-center '>
        {count}
      </div>
  )
}

export default Display