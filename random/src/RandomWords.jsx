import React, { useState } from "react";

const RandomWords = () => {
  const words = [
    "React",
    "HTML",
    "Java",
    "Cyber security",
    "Data Science",
    "Machine learning",
    "Deep learning",
    "Python",
  ];
  const [randomWord, setRandomWord] = useState("");

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setRandomWord(words[randomIndex]);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f4f4f9",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "300px",
        margin: "50px auto",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background-color 0.3s",
        }}
      >
        Click Me!
      </button>
      <p
        style={{
          marginTop: "20px",
          fontSize: "24px",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        {randomWord}
      </p>
    </div>
  );
};

export default RandomWords;
