import React, { useState } from 'react'
import { useContext } from 'react'
import MyContext from '../MyContext'

const AddTodo = () => {

    const { allTodos, setAllTodos, editTodo, setEditTodo, updateLocalStorage } = useContext(MyContext)


    const [userInput, setUserInput] = useState('')


    const handleAddTodo = () => {
        if (userInput != '') {
            setAllTodos([...allTodos, {
                id: Date.now(),
                todoText: userInput
            }])
            setUserInput('')
        }
        updateLocalStorage(allTodos)
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
                onClick={handleAddTodo}
            >Add Todo</button>

        </div>
    )
}

export default AddTodo