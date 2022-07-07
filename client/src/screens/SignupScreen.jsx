import React, { useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function SignupScreen() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setconfirmPw] = useState("");
  const [showMatchPw, setShowMatchPw] = useState(false);

  const regexUsername = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  const handleSignup = (e) => {
    e.preventDefault();
    if (
      username.length > 0 &&
      password.length > 0 &&
      confirmPw.length > 0 &&
      password === confirmPw
    ) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      navigate("../login", { replace: true });
    } else if (password !== confirmPw) {
      setShowMatchPw(true);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 30 }}>
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
        <Form style={{ marginTop: 20 }}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              placeholder="Type username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              style={{ width: "100%" }}
              isValid={regexUsername.test(username)}
              isInvalid={!regexUsername.test(username) && username.length > 0}
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Length must be greater 8
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group style={{ marginTop: 20 }}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Type password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              style={{ width: "100%" }}
              isValid={regexPassword.test(password)}
              isInvalid={!regexPassword.test(password) && password.length > 0}
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Length at least 8 and include upper, lower cases, numbers.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group style={{ marginTop: 20 }}>
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              required
              placeholder="Confirm password"
              onChange={(e) => setconfirmPw(e.target.value)}
              value={confirmPw}
              type="password"
              style={{ width: "100%" }}
              isValid={password === confirmPw && confirmPw.length > 0}
            />
            <Form.Control.Feedback type="valid">Match!</Form.Control.Feedback>
          </Form.Group>
          {showMatchPw && (
            <Alert
              variant="danger"
              dismissible
              onClose={() => setShowMatchPw(false)}
              style={{ marginTop: 20 }}
            >
              Password does not match!
            </Alert>
          )}
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 30 }}
          >
            <Button
              variant="outline-primary"
              style={{ width: 100 }}
              onClick={handleSignup}
              type="submit"
            >
              Sign Up
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
              Already have an account ?{" "}
              <p
                style={{
                  marginLeft: 10,
                  fontWeight: 600,
                  cursor: "pointer",
                  userSelect: "none",
                }}
                className="signUpText"
                onClick={() => navigate("../login", { replace: true })}
              >
                Log In
              </p>
            </p>
          </div>
        </Form>
      </Card>
    </div>
  );
}
