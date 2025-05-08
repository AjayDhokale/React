import React from 'react'
import AddTodo from './AddTodo'
import DisplayTodos from './DisplayTodos'

const TodoList = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <h1 className='text-6xl my-10 font-bold '>Todo App</h1>
        <AddTodo />
        <DisplayTodos />
    </div>
  )
}

export default TodoList