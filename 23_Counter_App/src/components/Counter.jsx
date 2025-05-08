import React, { useState } from 'react'
import Increment from './Increment'
import Decrement from './Decrement'
import DisplayCounter from './DisplayCounter'

const Counter = () => {

    const [count, setCount] = useState(10)

    return (
        <div>
            <h1 className='text-center text-6xl font-bold  py-4'>Counter App</h1>
            <div className='flex justify-evenly items-center'>
                <Decrement onDecrement={setCount} counterValue={count} />
                <DisplayCounter counterValue={count} />
                <Increment onIncrement={setCount} counterValue={count} />
            </div>
        </div>
    )
}

export default Counter