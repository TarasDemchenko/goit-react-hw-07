import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",

  //   loading: null,
  //   error: null,
};

const filtersSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.search.name;
