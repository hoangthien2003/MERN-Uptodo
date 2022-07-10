import React, { useState } from "react";
import { Card, Form, Alert } from "react-bootstrap";
import { CompletedSlice } from "../../redux/components/CompletedSlice";
import { useDispatch } from "react-redux";
import { TodoSlice } from "../../redux/components/TodoSlice";
import { ImportantSlice } from "../../redux/components/ImportantSlice";

export default function CompletedItem(props) {
  var textDecorationLine = "none";
  var opacity = 1;
  var variant;
  const dispatch = useDispatch();

  if (props.todo.completed) {
    textDecorationLine = "line-through";
    opacity = 0.7;
  }

  if (props.todo.priority === "High") variant = "danger";
  else if (props.todo.priority === "Medium") variant = "warning";
  else variant = "info";

  const handleIncomplete = (task, priority, id, completed, important) => {
    if (important) {
      dispatch(
        ImportantSlice.actions.addTask({
          task: task,
          priority: priority,
          id: id,
          completed: completed,
          important: important,
        })
      );
      dispatch(CompletedSlice.actions.deleteTask(id));
    } else {
      dispatch(
        TodoSlice.actions.addTask({
          task: task,
          priority: priority,
          id: id,
          completed: completed,
          important: important,
        })
      );
      dispatch(CompletedSlice.actions.deleteTask(id));
    }
  };

  return (
    <div className="w-full">
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 20,
          marginBottom: 10,
          borderRadius: 8,
        }}
      >
        <Form.Check className="flex items-center">
          <Form.Check.Input
            type="checkbox"
            checked={props.todo.completed}
            onChange={() => {
              handleIncomplete(
                props.todo.task,
                props.todo.priority,
                props.todo.id,
                false,
                props.todo.important
              );
            }}
            className="text-lg"
          />
          <Form.Check.Label
            style={{ textDecorationLine: textDecorationLine, opacity: opacity }}
            className="text-base ml-3"
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
          className="text-sm"
        >
          {props.todo.priority}
        </Alert>
        <div
          onClick={() => {
            dispatch(CompletedSlice.actions.deleteTask(props.todo.id));
          }}
        >
          <i
            class="bi bi-trash"
            style={{ cursor: "pointer", fontSize: 18 }}
          ></i>
        </div>
        <div className="ml-3 text-lg opacity-60">
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
