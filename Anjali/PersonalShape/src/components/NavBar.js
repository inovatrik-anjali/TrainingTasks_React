import React, { useState } from "react";
import "../index.css";
import Logo from "../Reusablecomponent/Logo";
import NavbarLink from "../Reusablecomponent/NavbarLinks";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Logo />

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10">
          <NavbarLink href="/" label="Home" />
          <NavbarLink href="/About" label="About" />
          <NavbarLink href="/Portfolio" label="Portfolio" />
          <NavbarLink href="/Contact" label="Contact" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span className="text-2xl">&times;</span>
            ) : (
              <span className="text-2xl">&#9776;</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed left-0 right-0 top-14 bottom-0 z-40 bg-darkblue flex flex-col items-center justify-center space-y-8">
          <NavbarLink href="/" label="Home" variant="mobile" />
          <NavbarLink
            href="/About"
            label="About"
            variant="mobile"
            className="animation-delay-100"
          />
          <NavbarLink
            href="/Portfolio"
            label="Portfolio"
            variant="mobile"
            className="animation-delay-200"
          />
          <NavbarLink
            href="/Contact"
            label="Contact"
            variant="mobile"
            className="animation-delay-300"
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
