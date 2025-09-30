import React from "react";

function ReusableButton({ label, onClick, color }) {
  const colorClasses = {
    green: "bg-green-500 hover:bg-green-600",
    red: "bg-red-500 hover:bg-red-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    gray: "bg-gray-500 hover:bg-gray-600",
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 text-white text-lg font-semibold rounded-xl shadow transition ${colorClasses[color]}`}
    >
      {label}
    </button>
  );
}

export default ReusableButton;
