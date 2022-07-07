import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "Todos",
  initialState: {
    task: "",
    priority: "",
  },
  reducers: {
    addTask: (state, action) => {
      state.task = action.payload;
    },
    addPriority: (state, action) => {
      state.priority = action.payload;
    },
  },
});
