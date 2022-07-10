import React from "react";
import { useState } from "react";
import { Alert, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CompletedSlice } from "../redux/components/CompletedSlice";
import { TodoSlice } from "../redux/components/TodoSlice";
import { v4 as uuidv4 } from "uuid";

export default function Task(props) {
  const [isImportant, setImportant] = useState(false);
  var textDecorationLine = "none";
  var opacity = 1;
  var variant;
  const dispatch = useDispatch();

  if (props.todo.priority === "High") variant = "danger";
  else if (props.todo.priority === "Medium") variant = "warning";
  else variant = "info";

  const handleComplete = (task, priority, id, completed) => {
    dispatch(
      CompletedSlice.actions.addTask({
        task: task,
        priority: priority,
        id: id,
        completed: completed,
      })
    );
    dispatch(TodoSlice.actions.deleteTask(id));
  };

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
            checked={props.todo.completed}
            onChange={() => {
              handleComplete(
                props.todo.task,
                props.todo.priority,
                props.todo.id,
                true
              );
            }}
          />
          <Form.Check.Label
            style={{ textDecorationLine: textDecorationLine, opacity: opacity }}
          >
            {props.todo.task}
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
          {props.todo.priority}
        </Alert>
        <div
          onClick={() => {
            dispatch(TodoSlice.actions.deleteTask(props.todo.id));
          }}
        >
          <i class="bi bi-trash" style={{ cursor: "pointer" }}></i>
        </div>
        <div
          className="ml-3 cursor-pointer"
          onClick={() => setImportant(!isImportant)}
        >
          {isImportant ? (
            <i class="bi bi-star-fill"></i>
          ) : (
            <i class="bi bi-star"></i>
          )}
        </div>
      </Card>
    </div>
  );
}
