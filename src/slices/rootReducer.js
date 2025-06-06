import { combineSlices } from '@reduxjs/toolkit';
import authSlice from "../slices/slice/authSlice";
import profileSlice from "../slices/slice/profileSlice";
import cartSlice from "../slices/slice/cartSlice";
import modalSlice from "../slices/slice/modalSlice";

export const rootReducer = combineSlices({
    auth:authSlice,
    profile:profileSlice,
    cart:cartSlice,
    modal:modalSlice
})