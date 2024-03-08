import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice"
import counterReducer from "./slices/counterSlice"
import cartReducer from "./slices/addToCart"

const store = configureStore({
    reducer: {
        // productReducer,
        counterReducer,
        // cartReducer
    }
})

export default store