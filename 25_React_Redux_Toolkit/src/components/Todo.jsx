import React, { useState } from 'react'

import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { markCompleted, removeTodo, updateTodo } from '../features/todoSlice';


const Todo = ({ id, todoText, status }) => {

    const dispatch = useDispatch()




    const [isEditing, setIsEditing] = useState(false)
    const [currentValue, setCurrentValue] = useState(todoText)

    const handleUpdate = () => {
        dispatch(updateTodo({ id, currentValue }))
        setIsEditing(false)
    }

    const handleCompleted = () => {
        dispatch(markCompleted(id))
        console.log(status);
    }

    return (
        <div>
            <div className={`flex justify-between items-center border-2 w-200 p-3 px-4 m-4 rounded-lg bg-[#409eaf] ${status === true ? 'bg-green-600' : ''}`}>
                <div className='flex justify-center items-center'>
                    <input type="checkbox" className='w-4 h-4' onChange={handleCompleted} />
                    {
                        isEditing ?
                            <input
                                type="text"
                                className='text-2xl font-bold ml-4 pl-4 border bg-gray-400'
                                value={currentValue}
                                onChange={(e) => setCurrentValue(e.target.value)}
                            />
                            :
                            <div className={`text-2xl font-bold pl-4  ${status === true ? 'line-through' : ''}`}>
                                {todoText}
                            </div>
                    }
                </div>

                <div className=' flex gap-2'>
                    {
                        isEditing ?
                            <button className='p-2  text-[#f0f400] text-xl cursor-pointer' onClick={handleUpdate} ><FaSave /></button>
                            :
                            <button className='p-2  text-[#f0f400] text-xl cursor-pointer' onClick={() => setIsEditing(true)}  ><FaEdit /></button>
                    }

                    <button className='p-2  text-[red] text-xl cursor-pointer' onClick={() => dispatch(removeTodo(id))} ><FaTrashAlt /></button>
                </div>
            </div>
        </div>
    )
}

export default Todo