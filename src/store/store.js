// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/users/userSlice.js";
import postSlice from "../features/posts/postSlice.js";
export const store = configureStore({
  reducer: {
    auth: userSlice,
    album: postSlice,
  },
});
