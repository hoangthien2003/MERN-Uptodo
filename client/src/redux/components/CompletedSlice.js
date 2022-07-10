import { createSlice } from "@reduxjs/toolkit";

export const CompletedSlice = createSlice({
  name: "completedtasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
  },
});
