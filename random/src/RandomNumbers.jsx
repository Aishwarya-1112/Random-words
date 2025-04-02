import React, { useState } from "react";

const RandomNumber = () => {
  const [number, setNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 1000) + 1;
    setNumber(randomNum);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px",
        backgroundColor: "#e8f5e9",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        width: "300px",
        margin: "50px auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <button
        onClick={generateRandomNumber}
        style={{
          backgroundColor: "#4CAF50",
          color: "#fff",
          padding: "12px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#388E3C")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4CAF50")}
      >
        Generate Random Number
      </button>

      {number !== null && (
        <p
          style={{
            marginTop: "20px",
            fontSize: "28px",
            color: "#333",
            fontWeight: "bold",
            animation: "fadeIn 0.5s ease-in-out",
          }}
        >
          Random Number: {number}
        </p>
      )}
    </div>
  );
};

export default RandomNumber;
