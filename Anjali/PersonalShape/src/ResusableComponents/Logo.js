import React from "react";

export default function Logo() {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: "193.08px",
        height: "47.59px",
      }}
    >
      <h1
        className="font-bold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-400 bg-clip-text text-transparent"
        style={{
        backgroundImage: "linear-gradient(to right,#4F7DFF,#7B4DCC,#E48DD9)",
          fontSize: "1.75rem", // ~28px
          letterSpacing: "-0.5px",
        //  fontFamily: "Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
        }}
      >
        Personal Shape
      </h1>
    </div>
  );
}
