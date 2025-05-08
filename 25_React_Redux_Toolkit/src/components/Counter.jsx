import React from 'react'
import Increment from './Increment'
import Decrement from './Decrement'
import Display from './Display'

const Counter = () => {
    return (
        <div className=' h-screen w-screen flex justify-evenly items-center text-3xl'>
            <Decrement />
            <Display />
            <Increment />
        </div>
    )
}

export default Counter