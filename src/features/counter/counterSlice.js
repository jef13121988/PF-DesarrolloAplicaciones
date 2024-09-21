import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    quantity: 1
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        
        increaseQuantity: ( state ) => {
            state.quantity += 1
        },

        decreaseQuantity: ( state ) => {
            state.quantity += 1
        },

        resetQuantity: ( state ) => {
            state.quantity = 1
        },

    }
})

export const { increaseQuantity, decreaseQuantity, resetQuantity } = counterSlice.actions

export default counterSlice.reducer