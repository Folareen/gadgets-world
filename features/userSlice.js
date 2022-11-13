import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: null,
  loading: false,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    authenticating: (state) => {
      state.loading = true;
    },
    authenticated: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

export const { authenticating, authenticated } = user.actions;
export default user.reducer;
