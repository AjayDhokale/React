import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'count',
    initialState: {
        value: 10
    },
    reducers: {
        increment: (state, action) => {

            if (state.value < 20) {
                state.value += 1
            }
        },
        decrement: (state, action) => {
            if (state.value > 0) {
                state.value -= 1
            }
            
        },
    }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
