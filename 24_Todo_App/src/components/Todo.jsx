import React, { isValidElement, useRef, useState } from 'react'
import { useContext } from 'react';
import MyContext from '../MyContext';
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaSave } from "react-icons/fa";



const Todo = ({ todoText, id }) => {

  const [isCompleted, setIsCompleted] = useState('false')

  const { allTodos, setAllTodos, updateLocalStorage } = useContext(MyContext)

  const [isEditing, setIsEditing] = useState(false)
  const [currentValue, setCurrentValue] = useState(todoText)


  const handleDeleteTodo = (id) => {


    if (confirm("Are you Sure to Delete...")) {
      const newTodos = allTodos.filter(t => t.id != id)
      setAllTodos([...newTodos])
    }
  }


  const handleCompleted = (e) => {
    if (isCompleted == 'false') {
      setIsCompleted('true')
    } else {
      setIsCompleted('false')
    }
  }




  const handleInputChange = (e) => {
    setCurrentValue(e.target.value)
  }

  const handleUpdate = (e) => {
    const newArr = allTodos.map(t => {
      if (t.id != id) return t
      else {
        return {
          ...t,
          todoText: currentValue
        }
      }
    })

    setAllTodos([...newArr])
    setIsEditing(false)
    updateLocalStorage(allTodos)
  }





  return (
    <div className='flex justify-between items-center border-2 w-200 p-3 px-4 m-4 rounded-lg bg-[#409eaf]'>

      <div className='flex justify-center items-center'>

        <input type="checkbox" onChange={handleCompleted} className='w-4 h-4' />


        {
          isEditing ?
            <input type="text" className='text-2xl font-bold ml-4 pl-4 border bg-gray-400' value={currentValue} onChange={handleInputChange} />
            :
            <div className={`text-2xl font-bold pl-4  ${isCompleted == 'true' ? 'line-through' : ''}`}>
              {todoText}
            </div>
        }

      </div>

      <div className=' flex gap-2'>

        {
          isEditing ?
            <button className='p-2  text-[#f0f400] text-xl cursor-pointer' onClick={() => handleUpdate()}><FaSave /></button>
            :
            <button className='p-2  text-[#f0f400] text-xl cursor-pointer' onClick={() => setIsEditing(true)}><FaEdit /></button>
        }


        <button className='p-2  text-[red] text-xl cursor-pointer' onClick={() => handleDeleteTodo(id)}><FaTrashAlt /></button>

      </div>
    </div>
  )
}

export default Todo