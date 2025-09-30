import { useState, useEffect, useRef } from "react";

const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing speed is fun to practice every day.",
  "React makes building user interfaces easy.",
  "Consistency is the key to improving typing skills."
];

export default function TypingTest() {
  const [target, setTarget] = useState("");
  const [input, setInput] = useState("");
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [finished, setFinished] = useState(false);
  const [correctWords, setCorrectWords] = useState(0);
  const [incorrectWords, setIncorrectWords] = useState(0);
  const timerRef = useRef(null);

  // Pick random sentence
  const loadSentence = () => {
    const random = sentences[Math.floor(Math.random() * sentences.length)];
    setTarget(random);
  };

  useEffect(() => {
    loadSentence();
  }, []);

  // Timer logic
  useEffect(() => {
    if (started && !finished) {
      timerRef.current = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [started, finished]);

  const handleChange = (e) => {
    const val = e.target.value;
    if (!started) setStarted(true);

    setInput(val);

    // Check if typing is finished (when input length >= target length)
    if (val.length >= target.length) {
      clearInterval(timerRef.current);
      setFinished(true);

      // Count correct & incorrect words
      const targetWords = target.trim().split(/\s+/);
      const typedWords = val.trim().split(/\s+/);

      let correct = 0;
      let incorrect = 0;

      targetWords.forEach((word, i) => {
        if (typedWords[i] === word) correct++;
        else if (typedWords[i]) incorrect++;
      });

      setCorrectWords(correct);
      setIncorrectWords(incorrect);
    }
  };

  // Restart test
  const restartTest = () => {
    clearInterval(timerRef.current);
    setInput("");
    setStarted(false);
    setTime(0);
    setFinished(false);
    setCorrectWords(0);
    setIncorrectWords(0);
    loadSentence();
  };

  // Calculate WPM
  const wordsTyped = input.trim().split(/\s+/).filter(Boolean).length;
  const minutes = time / 60;
  const wpm =
    finished && minutes > 0 ? Math.round(wordsTyped / minutes) : 0;

  // Highlight characters
  const renderText = () => {
    return target.split("").map((ch, i) => {
      let color = "";
      if (i < input.length) {
        color = ch === input[i] ? "text-green-600" : "text-red-600";
      }
      return (
        <span key={i} className={color}>
          {ch}
        </span>
      );
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Typing Speed Tester</h1>

      <p className="mb-4 text-lg bg-white p-4 rounded shadow max-w-xl">
        {renderText()}
      </p>

      <textarea
        className="border p-2 w-full max-w-xl rounded"
        rows={3}
        value={input}
        onChange={handleChange}
        disabled={finished}
        placeholder="Start typing here..."
      />

      <div className="mt-4 text-lg">
        ⏱ Time: <b>{time}s</b>
      </div>

      {finished && (
        <div className="mt-4 text-center">
          <div className="text-2xl font-semibold text-blue-600">
            🚀 Your WPM: {wpm}
          </div>
          <div className="mt-2 text-green-600">
            ✅ Correct Words: {correctWords}
          </div>
          <div className="text-red-600">
            ❌ Incorrect Words: {incorrectWords}
          </div>

          {/* Restart Button */}
          <button
            onClick={restartTest}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            🔄 Restart Test
          </button>
        </div>
      )}
    </div>
  );
}