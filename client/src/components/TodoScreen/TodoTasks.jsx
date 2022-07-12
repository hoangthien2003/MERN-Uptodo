import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import Task from "../../components/Task";
import { useDispatch, useSelector } from "react-redux";
import { TodoSlice } from "../../redux/components/TodoSlice";
import { todosSelector } from "../../redux/selectors";
import { v4 as uuidv4 } from "uuid";

export default function TodoTasks() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("High");
  const todosRedux = useSelector(todosSelector);

  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    if (task.length > 0) {
      dispatch(
        TodoSlice.actions.addTask({
          task: task,
          priority: priority,
          id: uuidv4(),
          completed: false,
          important: false,
        })
      );
      setTask("");
      setPriority("High");
    }
  };

  return (
    <div>
      <Card
        style={{
          paddingTop: 30,
          paddingRight: 50,
          paddingBottom: 20,
          paddingLeft: 50,
          width: 650,
          borderRadius: 20,
        }}
      >
        <h1
          style={{ textAlign: "center" }}
          className="text-4xl font-bold select-none"
        >
          Todos App
        </h1>
        <h4 className="mt-3 text-lg font-semibold select-none">Tasks</h4>
        <div
          style={{
            height: 450,
            overflow: "auto",
            marginBottom: 10,
            marginTop: 20,
          }}
          className="taskScreen"
        >
          {todosRedux.map((todo, index) => {
            return <Task key={index} todo={todo} id={index} />;
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
          <Button
            variant="primary"
            type="submit"
            onClick={handleAdd}
            className="text-slate-700"
          >
            Add
          </Button>
        </Form>
      </Card>
    </div>
  );
}
