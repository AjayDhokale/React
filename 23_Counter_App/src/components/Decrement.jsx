import React from 'react'

const Decrement = ({onDecrement, counterValue}) => {
  return (
    <div>
      <button
        type="button"
        className='bg-black text-4xl text-white px-6 py-2 rounded-2xl'
        onClick={() => onDecrement(counterValue-1)}
      > - </button>
    </div>
  )
}

export default Decrement