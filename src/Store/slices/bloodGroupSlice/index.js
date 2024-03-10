import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bloodGroup: ""
};

const counterSlice = createSlice({
  name: "bloodGroup",
  initialState,
  reducers: {
    getBloodGroup: (state, action) => {
      console.log("state", state);
      console.log("action", action.payload);
    //   state.counterValue = ++state.counterValue;
    },
  },
});

const { actions, reducer } = counterSlice;

export const { getBloodGroup } = actions;

export default reducer;