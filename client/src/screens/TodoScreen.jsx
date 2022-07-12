import React, { useEffect } from "react";
import "../styles/TodoScreen.css";
import "../components/TodoScreen/CompletedTasks";
import CompletedTasks from "../components/TodoScreen/CompletedTasks";
import ImportantTasks from "../components/TodoScreen/ImportantTasks";
import TodoTasks from "../components/TodoScreen/TodoTasks";
import { useSelector } from "react-redux";
import { loginSelector } from "../redux/selectors";
import { useNavigate } from "react-router-dom";

export default function TodoScreen() {
  const isAuth = useSelector(loginSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) navigate("../login", { replace: true });
  });

  return (
    <div className="container">
      <CompletedTasks />
      <TodoTasks />
      <ImportantTasks />
    </div>
  );
}
