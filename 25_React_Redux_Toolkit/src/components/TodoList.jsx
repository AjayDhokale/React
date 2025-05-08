import React from 'react'
import AddTodo from './AddTodo'
import DisplayTodo from './DisplayTodo'

const TodoList = () => {
  return (
    <div className='mt-20 flex justify-center items-center flex-col'>
        <AddTodo />
        <DisplayTodo />
    </div>
  )
}

export default TodoList