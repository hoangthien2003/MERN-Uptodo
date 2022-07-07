import React from "react";
import { useState } from "react";
import { Alert, Card, Form } from "react-bootstrap";

export default function Task(props) {
  const [isChecked, setIsChecked] = useState(false);
  var textDecorationLine = "none";
  var opacity = 1;
  var variant;

  if (isChecked) {
    textDecorationLine = "line-through";
    opacity = 0.7;
  } else {
    textDecorationLine = "none";
    opacity = 1;
  }

  if (props.todo.priorities === "High") variant = "danger";
  else if (props.todo.priorities === "Medium") variant = "warning";
  else variant = "info";

  return (
    <div>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 20,
          paddingRight: 20,
          marginBottom: 10,
        }}
      >
        <Form.Check>
          <Form.Check.Input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <Form.Check.Label
            style={{ textDecorationLine: textDecorationLine, opacity: opacity }}
          >
            {props.todo.tasks}
          </Form.Check.Label>
        </Form.Check>
        <Alert
          variant={variant}
          style={{
            paddingTop: 5,
            paddingRight: 10,
            paddingBottom: 5,
            paddingLeft: 10,
            marginLeft: "auto",
            marginBottom: 0,
            marginRight: 20,
          }}
        >
          {props.todo.priorities}
        </Alert>
        <div onClick={() => props.removeTodo()}>
          <i class="bi bi-trash" style={{ cursor: "pointer" }}></i>
        </div>
      </Card>
    </div>
  );
}
