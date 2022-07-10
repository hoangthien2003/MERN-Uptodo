import React, { useState } from "react";
import { Button, Card, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/LoginScreen.css";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { LoginSlice } from "../redux/components/LoginSlice";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMatchLogin, setShowMatchLogin] = useState(false);
  const [showError, setShowError] = useState("");

  const auth = getAuth();
  const dispatch = useDispatch();

  // const handleLoginUsernamePassword = (e) => {
  //   e.preventDefault();

  //   const storedUsername = localStorage.getItem("username");
  //   const storedPassword = localStorage.getItem("password");
  //   if (username === storedUsername && password === storedPassword) {
  //     dispatch(LoginSlice.actions.isAuthChange(true));
  //     navigate("../", { replace: true });
  //   } else setShowMatchLogin(true);
  // };

  const handleLoginwithEmailPassword = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(LoginSlice.actions.isAuthChange(true));
        navigate("../", { replace: true });
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error.code);
        setShowMatchLogin(true);
        setShowError(error.code);
      });
  };

  const handleLoginwithGoogle = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(LoginSlice.actions.isAuthChange(true));
        navigate("../", { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleLoginwithGithub = async (e) => {
    e.preventDefault();
    const provider = new GithubAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(LoginSlice.actions.isAuthChange(true));
        navigate("../", { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: 30,
      }}
    >
      <Card
        style={{
          paddingTop: 30,
          paddingBottom: 20,
          paddingLeft: 50,
          paddingRight: 50,
          borderRadius: 10,
          width: 400,
        }}
      >
        <Card.Title style={{ textAlign: "center", fontSize: 25 }}>
          Hi bros
        </Card.Title>
        {showMatchLogin && (
          <Alert
            variant="danger"
            dismissible
            onClose={() => setShowMatchLogin(false)}
          >
            {showError}
          </Alert>
        )}
        <Form style={{ marginTop: 20 }}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Type email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              style={{ width: "100%" }}
            />
          </Form.Group>
          <Form.Group style={{ marginTop: 20 }}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="Type password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              style={{ width: "100%" }}
            />
          </Form.Group>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 30 }}
          >
            <Button
              variant="outline-primary"
              style={{ width: 100 }}
              onClick={handleLoginwithEmailPassword}
              type="submit"
            >
              Login
            </Button>
          </div>
          <div
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "whitesmoke",
              marginTop: 20,
              borderRadius: 8,
            }}
          ></div>
          <Button
            variant="outline-danger"
            type="submit"
            style={{
              width: "100%",
              marginTop: 20,
            }}
            onClick={handleLoginwithGoogle}
          >
            <i class="bi bi-google" style={{ marginRight: 10 }}></i>
            Login with Google
          </Button>
          <Button
            variant="outline-secondary"
            type="submit"
            style={{
              width: "100%",
              marginTop: 15,
            }}
            onClick={handleLoginwithGithub}
          >
            <i class="bi bi-github" style={{ marginRight: 10 }}></i>
            Login with Github
          </Button>
          <div
            style={{ marginTop: 30, display: "flex", justifyContent: "center" }}
          >
            <p
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: 16,
              }}
            >
              New member ?{" "}
              <p
                style={{
                  marginLeft: 10,
                  fontWeight: 600,
                  cursor: "pointer",
                  userSelect: "none",
                }}
                className="signUpText"
                onClick={() => navigate("../signup", { replace: true })}
              >
                Sign Up
              </p>
            </p>
          </div>
        </Form>
      </Card>
    </div>
  );
}
