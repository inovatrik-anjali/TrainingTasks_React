import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import Home from "./pages/Home";
import DarkThemePage from "./components/DarkThemePage";
import ImageCarousel from "./components/ImageCarousel";
import Stopwatch from "./components/Stopwatch";
import TypingTest from "./components/TypingTest";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/darktheme" element={<DarkThemePage />} />
          <Route path="/carousel" element={<ImageCarousel />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/typingtest" element={<TypingTest />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
