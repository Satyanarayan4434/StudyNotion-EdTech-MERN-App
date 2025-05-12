import {  createSlice } from "@reduxjs/toolkit";

const initialState = false;

const modalSlice = createSlice({
    name:"modal",
    initialState,
    reducers:{
        modalState(state, action){
            return action.payload;
        }
    }
})

export const {modalState} = modalSlice.actions
export default modalSlice.reducer