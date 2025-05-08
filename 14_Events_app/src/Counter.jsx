import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(5)

    const increseCounter = () => {
        if (count < 10) setCount(count + 1)
        console.log(count);

    }

    const decreseCounter = () => {
        if (count > 0) setCount(count - 1)
        console.log(count);
    }

    return (
        <div>
            <h1 className='text-7xl  text-center mb-10'>Count : {count}</h1>
            <button className='bg-black border-2 text-2xl p-4 rounded-lg m-10' type="button" onClick={increseCounter}>Increase Counter</button>
            <button className='bg-black border-2 text-2xl p-4 rounded-lg' type="button" onClick={decreseCounter}>Decrease Counter</button>
        </div>
    )
}

export default Counter