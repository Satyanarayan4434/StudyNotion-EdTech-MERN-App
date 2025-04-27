import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:localStorage.getItem("user")?(localStorage.getItem("user")):(null)
}

const profileSlice = createSlice({
    name:"profile",
    initialState:initialState,
    reducers:{
        setProfile(state, action){
            state.value = action.payload
        }
    }
})

export const {setProfile} = profileSlice.actions;
export default profileSlice.reducer