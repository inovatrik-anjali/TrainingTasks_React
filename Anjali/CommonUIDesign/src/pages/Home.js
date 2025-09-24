import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 text-gray-900">
        My Apps
      </h1>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        <Link
          to="/darktheme"
          className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow text-center text-gray-900"
        >
          <span className="text-5xl mb-4">🌙</span>
          <h2 className="text-xl font-semibold">Dark Theme</h2>
        </Link>

        <Link
          to="/carousel"
          className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow text-center text-gray-900"
        >
          <span className="text-5xl mb-4">🎠</span>
          <h2 className="text-xl font-semibold">Carousel</h2>
        </Link>

        <Link
          to="/stopwatch"
          className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow text-center text-gray-900"
        >
          <span className="text-5xl mb-4">⏱️</span>
          <h2 className="text-xl font-semibold">Stopwatch</h2>
        </Link>

        <Link
          to="/typingtest"
          className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow text-center text-gray-900"
        >
          <span className="text-5xl mb-4">⌨️</span>
          <h2 className="text-xl font-semibold">Typing Speed Test</h2>
        </Link>
      </div>
    </div>
  );
}
