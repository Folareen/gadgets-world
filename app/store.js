import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import userReducer from "../features/userSlice";
import searchReducer from "../features/searchSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    search: searchReducer,
  },
});

export default store;
