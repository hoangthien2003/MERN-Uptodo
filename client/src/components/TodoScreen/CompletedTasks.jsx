import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { completedSelector } from "../../redux/selectors";
import CompletedItem from "./CompletedItem";

export default function CompletedTasks() {
  const completedTasks = useSelector(completedSelector);
  return (
    <div className="flex items-center content-center w-screen h-screen py-3">
      <Card
        style={{
          backgroundColor: "#8cffbe",
        }}
        className="flex items-center px-10 py-4 text-2xl font-semibold rounded-2xl w-100 mr-2.5
        h-full select-none"
      >
        <h4>Completed Tasks</h4>
        <div className="flex flex-col h-screen w-full overflow-auto mt-5">
          {completedTasks.map((todo, index) => {
            return <CompletedItem key={index} todo={todo} id={index} />;
          })}
        </div>
      </Card>
    </div>
  );
}
