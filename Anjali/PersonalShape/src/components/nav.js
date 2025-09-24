import React, { useState } from "react";
import Logo from "../ResusableComponents/Logo";
import NavLink from "../ResusableComponents/NavLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarHeight = 90; 
  return (
    <nav className="sticky top-0 w-full max-w-[1400px] mx-auto px-8 h-[100px] z-50 bg-yellow flex items-center justify-between">
      {/* Left: Logo */}
      <Logo />

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8">
        <NavLink href="/" label="Home" />
        <NavLink href="/about" label="About" />
        <NavLink href="/services" label="Services" />
        <NavLink href="/contact" label="Contact" />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none z-50 text-[#0F172A]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          // X  icon
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Black Overlay (excluding navbar) */}
      {isOpen && (
        <div
          className="fixed left-0 w-full bg-black flex flex-col justify-center items-center space-y-8 md:hidden z-40"
          style={{ top: `${navbarHeight}px`, height: `calc(100vh - ${navbarHeight}px)` }}
        >
          <NavLink
            href="/"
            label="Home"
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          />
          <NavLink
            href="/about"
            label="About"
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          />
          <NavLink
            href="/Portfolio"
            label="Portfolio"
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          />
          <NavLink
            href="/contact"
            label="Contact"
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          />
        </div>
      )}
    </nav>
  );
}
