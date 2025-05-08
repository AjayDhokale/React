import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        value: JSON.parse(localStorage.getItem('myTodos')) || []
    },
    reducers: {
        addNewTodo: (state, action) => {
            state.value.push(
                {
                    id: nanoid(),
                    todoText: action.payload,
                    status: false,
                }
            )
            console.log(state.value.status);

            localStorage.setItem('myTodos', JSON.stringify(state.value))
        },

        removeTodo: (state, action) => {
            const newArr = state.value.filter(t => t.id != action.payload)
            state.value = newArr
            localStorage.setItem('myTodos', JSON.stringify(state.value))

        },

        updateTodo: (state, action) => {
            const newArr = state.value.map(t => {
                if (t.id != action.payload.id) return t
                else return {
                    ...t,
                    todoText: action.payload.currentValue
                }
            })
            state.value = newArr
            localStorage.setItem('myTodos', JSON.stringify(state.value))

        },


        markCompleted: (state, action) => {
            state.value = state.value.map(t => {
                if (t.id == action.payload) {
                    return {
                        ...t,
                        status: !t.status
                    }
                }
                else {
                    return t
                }
            })
        }
    }
})


export const { addNewTodo, removeTodo, updateTodo,  markCompleted} = todoSlice.actions;
export default todoSlice.reducer;