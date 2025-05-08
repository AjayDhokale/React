import React from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../features/todoSlice'
import { useState } from 'react'


const AddTodo = () => {

    const dispatch = useDispatch()

    const [userInput, setUserInput] = useState('')

    
    const handleClick = () => {
        if ( userInput != '') {
            dispatch(addNewTodo(userInput))  
            setUserInput('')
        }
    }

    return (

        <div className='flex justify-center gap-4 w-130 text-xl p-4 border-2 rounded-2xl bg-[#409eaf]'>
            <input
                className=' w-[70%] p-2 px-4 outline-none  rounded-lg bg-white text-black'
                type="text"
                placeholder='Enter todo'
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button
                className='border w-[30%] font-bold text-[#00d9ff]  p-2 rounded-lg bg-[#ffffff] cursor-pointer hover:text-[#ffffff] hover:bg-[#00d9ff] '
                type="button"
                onClick={handleClick}
            >Add Todo</button>
        </div>

    )
}

export default AddTodo