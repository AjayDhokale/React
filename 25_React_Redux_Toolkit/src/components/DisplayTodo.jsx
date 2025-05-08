import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Todo from './todo.jsx'


const DisplayTodo = () => {

    const allTodos = useSelector(state => state.todo.value)

    return (
        <div>
            {
                allTodos.map(todo => {
                    return (
                        <Todo id={todo.id} todoText={todo.todoText} status={todo.status} />
                    )
                })
            }
        </div>
    )
}

export default DisplayTodo
