import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
