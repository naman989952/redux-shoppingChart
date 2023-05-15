import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "chart",
  initialState: [],
  reducers: {
    // reducer function always take two perameter state or action
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

// exporting function() throw actions
export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
