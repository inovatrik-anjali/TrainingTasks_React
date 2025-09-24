// src/pages/DarkThemePage.js
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedFlowers from "../components/FeaturedFlowers";
import BackButton from "./reusablebutton";

export default function DarkThemePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-all">
    <Navbar />
    <Hero />
    <FeaturedFlowers />
    </div>
  );
}
