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
      <h1 className="text-white text-5xl font-bold mt-3 select-none">UpTodo</h1>
      <div className="mt-5">
        <Link to="/todos">
          <Button variant="primary" className="mr-3 text-xl px-4 py-2">
            Todos App
          </Button>
        </Link>
        <Link to="/flashcard">
          <Button variant="secondary" className="mr-3 text-xl px-4 py-2">
            Flash Card
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomeScreen;
