import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../features/counterSlice'

const Increment = () => {

  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button type='button' onClick={() => dispatch(increment())} className=''>+</button>
      </div>
    </div>
  )
}

export default Increment