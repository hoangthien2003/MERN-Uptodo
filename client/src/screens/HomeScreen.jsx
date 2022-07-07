import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginSelector } from "../redux/selectors";
import { useSelector } from "react-redux";

function HomeScreen() {
  const navigate = useNavigate();

  const isAuth = useSelector(loginSelector);

  useEffect(() => {
    {
      if (!isAuth) navigate("../login", { replace: true });
    }
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "white" }}>UpTodo</h1>
      <div style={{ marginTop: 20 }}>
        <Link to="/todos">
          <Button variant="primary" style={{ marginRight: 20 }}>
            Todos App
          </Button>
        </Link>
        <Link to="/flashcard">
          <Button variant="secondary">Flash Card</Button>
        </Link>
      </div>
    </div>
  );
}

export default HomeScreen;
