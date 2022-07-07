import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import Task from "../components/Task";
import "../styles/TodoScreen.css";

export default function TodoScreen() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("High");
  const [todos, setTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    let copy = [...todos];
    copy = [
      ...todos,
      {
        id: task.length + 1,
        tasks: task,
        priorities: priority,
      },
    ];
    setTodos(copy);
    setTask("");
    setPriority("High");
  };

  const handleDelete = (item) => {
    var newTodos = [...todos].filter((todo, index) => index !== item);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <Card
        style={{
          paddingTop: 30,
          paddingRight: 50,
          paddingBottom: 20,
          paddingLeft: 50,
          width: 750,
          borderRadius: 20,
        }}
      >
        <h1 style={{ textAlign: "center" }}>Todos App</h1>
        <h4 style={{ marginTop: 20 }}>Tasks</h4>
        <div
          style={{
            height: 450,
            overflow: "auto",
            marginBottom: 10,
            marginTop: 20,
          }}
          className="taskScreen"
        >
          {todos.map((todo, index) => {
            return (
              <Task
                key={index}
                todo={todo}
                removeTodo={() => handleDelete(index)}
              />
            );
          })}
        </div>
        <div
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "whitesmoke",
            borderRadius: 8,
          }}
        ></div>
        <Form style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
          <Form.Control
            type="text"
            placeholder="Your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Form.Select
            style={{ width: 120 }}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Form.Select>
          <Button variant="primary" type="submit" onClick={handleAdd}>
            Add
          </Button>
        </Form>
      </Card>
    </div>
  );
}
