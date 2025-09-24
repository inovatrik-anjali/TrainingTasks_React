import React, { useState } from "react";
import ReusableButton from "../reusablecomponents/ReusableButton";



function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center space-y-6 w-80">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800">Counter App</h1>

        {/* Display */}
        <div className="text-5xl font-extrabold text-blue-600">{count}</div>

        {/* Buttons */}
        <div className="flex gap-4">
          <ReusableButton label="-" color="red" onClick={decrement} />
          <ReusableButton label="+" color="green" onClick={increment} />
        </div>

        {/* Reset */}
        <ReusableButton label="Reset" color="gray" onClick={reset} />
      </div>
    </div>
  );
}

export default Counter;
