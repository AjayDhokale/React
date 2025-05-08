import React from 'react'
import Todo from './Todo'
import { useState } from 'react'
import { useContext } from 'react'
import MyContext from '../MyContext'

const DisplayTodos = () => {

  const {allTodos} = useContext(MyContext)

  return (
    <div>
      
      {
        allTodos.length > 0 ?
        allTodos.map( (todo) => {
          return (
            <Todo id={todo.id} todoText={todo.todoText} />
          )
        })
        :
        <h1 className='text-center text-2xl font-bold mt-10 border-2 w-200 p-3 px-4 m-4 rounded-lg bg-[#409eaf]'>No todos to display...</h1>
      }

    </div>
  )
}

export default DisplayTodos