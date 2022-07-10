import React from "react";
import { Card } from "react-bootstrap";

export default function ImportantTasks() {
  return (
    <div className="flex items-center content-center w-screen h-screen py-3">
      <Card
        style={{ backgroundColor: "#ff9197" }}
        className="flex items-center px-10 py-4 text-2xl font-semibold rounded-2xl w-100 ml-2.5
        h-full
        "
      >
        <h4>Important Tasks</h4>
        <div className="flex h-95 py-3.5"></div>
      </Card>
    </div>
  );
}
