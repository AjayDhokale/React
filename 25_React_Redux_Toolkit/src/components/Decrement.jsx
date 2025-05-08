import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from '../features/counterSlice'

const Decrement = () => {


  const dispatch = useDispatch()

  return (
    <div className=''>
      
      <div>
        <button type='button' className='' onClick={() => dispatch(decrement())}>-</button>
      </div>

    </div>
  )
}

export default Decrement