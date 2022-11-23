import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  searchData: [],
};

const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    startSearch: (state) => {
      state.loading = true;
    },
    displayResult: (state, action) => {
      state.loading = false;
      if (!action.payload) {
        state.searchData = [];
      } else {
        state.searchData = action.payload;
      }
    },
  },
});

export const { startSearch, displayResult } = search.actions;
export default search.reducer;
