import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    signUpData:null,
    loading:null,
    token: localStorage.getItem("token")?(JSON.stringify(localStorage.getItem("token"))):(null)
}

const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setToken(state, action){
            state.token = action.payload
        },
        setSignUpData(state, action){
            state.signUpData = action.payload
        },
        setLoading(state, action){
            state.loading = action.payload
        }
    }
})

export const {setToken, setSignUpData, setLoading} = authSlice.actions;
export default authSlice.reducer