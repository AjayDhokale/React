import React from 'react'

const Increment = ({ onIncrement, counterValue }) => {
  return (
    <div>
      <button type="button" className='bg-black text-4xl text-white px-6 py-2 rounded-2xl' onClick={() => onIncrement(counterValue + 1)} >+</button>
    </div>
  )
}

export default Increment