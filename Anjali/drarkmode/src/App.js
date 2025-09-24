import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeaturedFlowers from "./Components/FeaturedFlowers";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-all">
           
        <Navbar />
        <Hero />
       <FeaturedFlowers/>
       
      </div>
    </ThemeProvider>
  );
};

export default App;
