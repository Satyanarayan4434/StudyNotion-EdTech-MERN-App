import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalItems:0
}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        totalItems(state, action){
            state.totalItems = action.payload
        }
        //addItem
        //RemoveItem
        //ResetCart
    }
})

export const {cartCounter} = cartSlice.actions;
export default cartSlice.reducer