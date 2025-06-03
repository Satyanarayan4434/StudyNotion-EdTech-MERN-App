import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    totalItems:localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0,
    cartItems: localStorage.getItem("cartItem")?JSON.parse(localStorage.getItem("cartItem")):[],
    totalAmount: localStorage.getItem("totalAmount") ? JSON.parse(localStorage.getItem("totalAmount")) : 0
}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        totalItems(state, action){
            state.totalItems = action.payload
        },
        //addItem
        addToCart(state, action){
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if(itemIndex >= 0){
                return toast.error(`${action.payload.title} is already in the cart`);
            }else{
                const tempProduct = {...action.payload, quantity: 1};
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.title} added to the cart`);
            }
            state.totalItems += 1;
            state.totalAmount += action.payload.price;
            localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
            localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
        },
        //RemoveItem
        removeFromCart(state, action){
            const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
            state.cartItems = nextCartItems;
            state.totalItems -= 1;
            state.totalAmount -= action.payload.price * action.payload.quantity;
            localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
            localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
            toast.error(`${action.payload.title} removed from the cart`);
        },
        //ResetCart
        resetCart(state, action){
            state.cartItems = [];
            state.totalItems = 0;
            state.totalAmount = 0;
            localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
            localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
            toast.success(`Cart has been reset`);
        },
    }
})

export const {cartCounter} = cartSlice.actions;
export default cartSlice.reducer