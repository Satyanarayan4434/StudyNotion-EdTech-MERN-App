import { createSlice } from "@reduxjs/toolkit";

const getUserFromLocalStorage = () => {
    try {
      const userString = localStorage.getItem("user");
      return userString ? JSON.parse(userString) : null;
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
      return null;
    }
  };

  const initialState = {
    user: getUserFromLocalStorage(),
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
        }
    }
})

export const {setProfile, clearProfile} = profileSlice.actions;
export default profileSlice.reducer