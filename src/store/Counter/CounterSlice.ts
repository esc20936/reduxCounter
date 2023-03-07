import { createSlice } from "@reduxjs/toolkit";

// Set the initial state and the type of the state
interface CounterState {
  value: number;
}
const initialState: CounterState = {
  value: 0,
};

// Create the slice and pass in the initial state
export const CounterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    // Create the actions

    // Increment the value by 1
    increment: (state) => {
      state.value += 1;
    },
    //   Decrement the value by 1
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Export the actions
export const { increment, decrement } = CounterSlice.actions;
