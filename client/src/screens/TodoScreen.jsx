import React, { useState } from "react";
import "../styles/TodoScreen.css";
import "../components/TodoScreen/CompletedTasks";
import CompletedTasks from "../components/TodoScreen/CompletedTasks";
import ImportantTasks from "../components/TodoScreen/ImportantTasks";
import TodoTasks from "../components/TodoScreen/TodoTasks";

export default function TodoScreen() {
  return (
    <div className="container">
      <CompletedTasks />
      <TodoTasks />
      <ImportantTasks />
    </div>
  );
}
