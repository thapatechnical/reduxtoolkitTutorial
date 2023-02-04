import { createSlice } from "@reduxjs/toolkit";

createSlice;

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      console.log("hi", action.payload);
      state.splice(action.payload, 1);
    },
    deleteUser(state, action) {},
  },
});

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
