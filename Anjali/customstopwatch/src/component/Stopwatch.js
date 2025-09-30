import React, { useState, useRef } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timer = useRef(null);

  // Format time as HH:MM:SS
  const formatTime = (ms) => {
    const h = String(Math.floor(ms / 3600000)).padStart(2, "0");
    const m = String(Math.floor((ms % 3600000) / 60000)).padStart(2, "0");
    const s = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const startPause = () => {
    if (running) {
      clearInterval(timer.current);
    } else {
      const start = Date.now() - time;
      timer.current = setInterval(() => setTime(Date.now() - start), 100);
    }
    setRunning(!running);
  };

  const reset = () => {
    clearInterval(timer.current);
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  const addLap = () => {
    if (running) setLaps([...laps, formatTime(time)]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Stopwatch</h1>

      <h2 className="text-5xl font-mono mb-6 text-gray-900">
        {formatTime(time)}
      </h2>

      <div className="flex gap-4 mb-6">
        <button
          onClick={startPause}
          className={`px-5 py-2 rounded-lg font-semibold shadow-md ${
            running
              ? "bg-yellow-500 hover:bg-yellow-600 text-white"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
        >
          {running ? "Pause" : "Start"}
        </button>

        <button
          onClick={reset}
          className="px-5 py-2 rounded-lg font-semibold shadow-md bg-red-500 hover:bg-red-600 text-white"
        >
          Reset
        </button>

        <button
          onClick={addLap}
          disabled={!running}
          className={`px-5 py-2 rounded-lg font-semibold shadow-md ${
            running
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Lap
        </button>
      </div>

      <ul className="w-full max-w-sm bg-white shadow-md rounded-lg p-4 divide-y divide-gray-200">
        {laps.length === 0 ? (
          <li className="text-center text-gray-500">No laps recorded</li>
        ) : (
          laps.map((lap, i) => (
            <li
              key={i}
              className="flex justify-between py-2 text-gray-800 font-mono"
            >
              <span>Lap {i + 1}</span>
              <span>{lap}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
