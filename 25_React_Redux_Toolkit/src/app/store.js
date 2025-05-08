import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice.js'
import todoReducer from '../features/todoSlice.js'

export const store = configureStore({
    reducer:{
        count: counterReducer,
        todo: todoReducer
    }
})

