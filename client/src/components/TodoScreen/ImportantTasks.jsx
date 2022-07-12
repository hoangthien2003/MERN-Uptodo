import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { importantSelector } from "../../redux/selectors";
import ImportantItem from "./ImportantItem";

export default function ImportantTasks() {
  const importantTasks = useSelector(importantSelector);
  return (
    <div className="flex items-center content-center w-screen h-screen py-3">
      <Card
        style={{ backgroundColor: "#ff9197" }}
        className="flex items-center px-10 py-4 text-2xl font-semibold rounded-2xl w-100 ml-2.5
        h-full select-none
        "
      >
        <h4>Important Tasks</h4>
        <div className="flex flex-col h-screen w-full overflow-auto mt-5">
          {importantTasks.map((todo, index) => {
            return <ImportantItem key={index} todo={todo} id={index} />;
          })}
        </div>
      </Card>
    </div>
  );
}
