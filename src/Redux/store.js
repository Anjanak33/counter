import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store = configureStore({
    reducer:{
        // reducer shoule be key/value pair
        counter:counterSlice
    }
})