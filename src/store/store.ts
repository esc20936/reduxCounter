import { configureStore } from '@reduxjs/toolkit';
import { CounterSlice } from './Counter/CounterSlice'; // Import the slice from the Counter folder

// Create the store and pass in the slice 
export const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer // Pass in the reducer from the slice
  }
})