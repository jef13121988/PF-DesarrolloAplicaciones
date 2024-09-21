import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    total: 0
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{

        addItemCart: ( state, action ) => {
            const newItem = action.payload
            const itemFound = state.items.find( item => item.id === newItem.id)

            state.total += newItem.precio * newItem.cantidad

            if( itemFound ) {
                newItem.cantidad += itemFound.cantidad
                state.items = state.items.filter( item =>  item.id !== newItem.id )
            }

            state.items.push( newItem )
            
        },

        removeItemCart: ( state, action ) => {
            const { id, precio, cantidad } = action.payload
            state.items = state.items.filter( item =>  item.id !== id )
            state.total -= precio * cantidad
        },

        incrementItemCart: ( state, action ) => {
            const { id } = action.payload

            state.items = state.items.map(item => item.id === id
                ?
                    {
                    ...item,
                    cantidad: item.cantidad + 1,
                    }
                :
                    item
            )

            state.total = state.items.reduce(
                (accumulator, item) => accumulator + item.precio * item.cantidad,
                0,
            )
            
        },

        decrementItemCart: ( state, action ) => {
            const { id } = action.payload

            state.items = state.items.map( item => item.id === id
                ?
                    {
                    ...item,
                    cantidad: item.cantidad - 1,
                    }
                :
                    item
            )

            state.total = state.items.reduce(
                (accumulator, item) => accumulator + item.precio * item.cantidad,
                0,
            )

        },

        clearCart:( state ) => {
            state.items = [],
            state.total = 0
        }

    }
})

export const { addItemCart, removeItemCart, incrementItemCart, decrementItemCart, clearCart } = cartSlice.actions

export default cartSlice.reducer