import React from "react";
import { Card } from "react-bootstrap";
import HomeScreen from "../components/FlashcardScreen/HomeScreen";
import "../styles/FlashcardScreen.css";

export default function FlashcardScreen() {
  return (
    <div>
      <div className="headerBar">
        <h2 style={{ color: "white" }}>Flash Card</h2>
      </div>
      <HomeScreen />
    </div>
  );
}
