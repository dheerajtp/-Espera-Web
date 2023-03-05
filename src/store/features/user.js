import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  value: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : {},
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.value.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.value.user));
    },
    logoutUser: (state) => {
      state.value.user = {};
      localStorage.setItem("user", JSON.stringify(state.value.user));
    },
  },
});

export const { createUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
