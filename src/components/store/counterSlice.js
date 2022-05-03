import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 12,
        products: []
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        setProductsState: (state, data) => {
            state.products = data.payload;
        }
    }
})


export const { increment, decrement, setProductsState } = counterSlice.actions

export default counterSlice.reducer