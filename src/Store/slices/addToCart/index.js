import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addToCart: []
}

const cartSlice = createSlice({
    name: "addToCart",
    initialState,
    reducers:{
        addCart: (state,action)=>{
            if(state.addToCart.length == 0){
                state.addToCart.push(action.payload)
            }else {
                const indexNum = state.addToCart.findIndex((p) => {
                  if (p.id === action.payload.id) {
                    return true;
                  }
                });
                if (indexNum == -1) {
                  state.addToCart.push(action.payload);
                }
              }
            
        }
    }

})

const {actions, reducer} = cartSlice
export const {addCart} = actions

export default reducer