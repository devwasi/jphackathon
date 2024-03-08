import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    products: [],
    isLoading : false,
    isError : false
}

const productSlice = createSlice({
    name: "product",
    initialState,

    extraReducers: (builder)=>{
        builder.addCase(fetchProduct.pending, (state, action)=>{
            // console.log(state,"state pending")
            state.isLoading = true
        })
        builder.addCase(fetchProduct.fulfilled, (state, action)=>{
            // console.log(action,"state fullfilled")
            state.isLoading = false
            state.products = action.payload

        })
        builder.addCase(fetchProduct.rejected, (state, action)=>{
            // console.log(state,"state rejected")
            state.isError = action.payload
            state.isLoading = false
            state.products = []
        })
    }

})

export const fetchProduct = createAsyncThunk(
    "product/fetch",
    async(state)=>{
       try {
        const fetchData = await axios.get("https://fakestoreapi.com/products");
        return fetchData.data
       } catch (error) {
        console.log("catch error==>", error)
       }
    }
    )

    const {actions, reducer} = productSlice
    export default reducer