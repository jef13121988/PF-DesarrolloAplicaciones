import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:[],
    total:0
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{

        addItemCart: ( state, action ) => {
            const {id, precio, quantity} = action.payload
            const itemFound = state.items.find( item => item.id === id)
            itemFound ? itemFound.quantity + quantity : state.items.push( action.payload )
            state.total += precio * quantity
        },

        removeItemCart: ( state, action ) => {
            const { id, precio, quantity } = action.payload
            state.items = state.items.filter( item =>  item.id !== id )
            state.total -= precio * quantity
        },

        clearCart:( state ) => {
            state.items = [],
            state.total = 0
        }

    }
})

export const { addItemCart, removeItemCart, clearCart } = cartSlice.actions

export default cartSlice.reducer