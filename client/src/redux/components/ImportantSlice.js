import { createSlice } from "@reduxjs/toolkit";

export const ImportantSlice = createSlice({
  name: "importanttasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((index) => index.id !== action.payload);
    },
  },
});
