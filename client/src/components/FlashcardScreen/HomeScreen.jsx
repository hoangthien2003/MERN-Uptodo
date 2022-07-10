import React, { useState } from "react";

export default function HomeScreen() {
  const [hasCards, setHasCards] = useState(false);
  return (
    <div>
      {hasCards ? (
        <div></div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h2>No flash cards</h2>
        </div>
      )}
    </div>
  );
}
