import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    loading: false,
};


const profileSlice = createSlice({
    name:"profile",
    initialState:initialState,
    reducers:{
        setProfile(state, action){
            state.user = action.payload
            
        },
        clearProfile(state) {
            state.user = null;
        },
        setLoading(state, action){
            state.loading = action.payload
        }
    }
})

export const {setProfile, clearProfile, setLoading} = profileSlice.actions;
export default profileSlice.reducer