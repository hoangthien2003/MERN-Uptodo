import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "login",
  initialState: {
    isAuth: false,
  },
  reducers: {
    isAuthChange: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});
