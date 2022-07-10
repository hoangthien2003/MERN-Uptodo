import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { completedSelector } from "../../redux/selectors";
import Task from "../Task";

export default function CompletedTasks() {
  const completedTask = useSelector(completedSelector);
  return (
    <div className="flex items-center content-center w-screen h-screen py-3">
      <Card
        style={{
          backgroundColor: "#8cffbe",
        }}
        className="flex items-center px-10 py-4 text-2xl font-semibold rounded-2xl w-100 mr-2.5
        h-full"
      >
        <h4>Completed Tasks</h4>
        <div className="flex h-screen overflow-auto"></div>
      </Card>
    </div>
  );
}
