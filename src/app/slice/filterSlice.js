import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    category: '',
    make: '',
    color: '',
    year: '',
    sellingPrice: '',
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setMake(state, action) {
      state.make = action.payload;
    },
    setColor(state, action) {
      state.color = action.payload;
    },
    setYear(state, action) {
      state.year = action.payload;
    },
    setSellingPrice(state, action) {
      state.sellingPrice = action.payload;
    },
  },
});

export const {
  setCategory,
  setMake,
  setColor,
  setYear,
  setSellingPrice,
} = filterSlice.actions;

export default filterSlice.reducer;
