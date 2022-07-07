import { configureStore } from "@reduxjs/toolkit";
import { LoginSlice } from "./components/LoginSlice";
import { TodoSlice } from "./components/TodoSlice";

export const store = configureStore({
  reducer: {
    login: LoginSlice.reducer,
    todos: TodoSlice.reducer,
  },
});
