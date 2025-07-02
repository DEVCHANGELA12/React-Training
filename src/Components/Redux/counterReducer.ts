import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increase: (state) => {
      state.count = state.count + 1;
      return state;
    },

    decrease: (state) => {
      state.count = state.count - 1;
      return state;
    },

    reset: (state) => {
      state.count = 0;
      return state;
    },
  },
});

export const { increase, decrease, reset } = counterSlice.actions;
export default counterSlice.reducer;
