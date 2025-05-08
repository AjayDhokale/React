import React from 'react'

const DisplayCounter = ({counterValue}) => {
  return (
    <div>
        <div className='text-6xl text-white'>
            {counterValue}
        </div>
    </div>
  )
}

export default DisplayCounter