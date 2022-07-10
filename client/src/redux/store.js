import { configureStore } from "@reduxjs/toolkit";
import { CompletedSlice } from "./components/CompletedSlice";
import { LoginSlice } from "./components/LoginSlice";
import { TodoSlice } from "./components/TodoSlice";

export const store = configureStore({
  reducer: {
    login: LoginSlice.reducer,
    todos: TodoSlice.reducer,
    completedtasks: CompletedSlice.reducer,
  },
});
