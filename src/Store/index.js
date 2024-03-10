import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice"
import counterReducer from "./slices/counterSlice"
import cartReducer from "./slices/addToCart"
import bloodGroupreducer from "./slices/bloodGroupSlice"

const store = configureStore({
    reducer: {
        // productReducer,
        counterReducer,
        bloodGroupreducer,
        // cartReducer
    }
})

export default store