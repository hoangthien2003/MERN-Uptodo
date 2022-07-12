import React from "react";
import { Alert, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CompletedSlice } from "../redux/components/CompletedSlice";
import { ImportantSlice } from "../redux/components/ImportantSlice";
import { TodoSlice } from "../redux/components/TodoSlice";

export default function Task(props) {
  var textDecorationLine = "none";
  var opacity = 1;
  var variant;
  const dispatch = useDispatch();

  if (props.todo.priority === "High") variant = "danger";
  else if (props.todo.priority === "Medium") variant = "warning";
  else variant = "info";

  const handleComplete = (task, priority, id, completed, important) => {
    dispatch(
      CompletedSlice.actions.addTask({
        task: task,
        priority: priority,
        id: id,
        completed: completed,
        important: important,
      })
    );
    dispatch(TodoSlice.actions.deleteTask(id));
  };

  const handleImportant = (task, priority, id, completed, important) => {
    dispatch(
      ImportantSlice.actions.addTask({
        task: task,
        priority: priority,
        id: id,
        completed: completed,
        important: important,
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
                true,
                props.todo.important
              );
            }}
          />
          <Form.Check.Label
            style={{ textDecorationLine: textDecorationLine, opacity: opacity }}
            className="select-none"
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
          className="select-none"
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
          onClick={() =>
            handleImportant(
              props.todo.task,
              props.todo.priority,
              props.todo.id,
              props.todo.completed,
              true
            )
          }
        >
          {props.todo.important ? (
            <i class="bi bi-star-fill"></i>
          ) : (
            <i class="bi bi-star"></i>
          )}
        </div>
      </Card>
    </div>
  );
}
