import React from "react";

function NavbarLink({ href, label, className = "", variant = "default" }) {
  // Base style for desktop links
  const baseStyle =
    "px-0 py-2 font-semibold transition hover:text-blue-300 hover:underline text-[15.2px]";

  // Reusable style sets
  const variants = {
    default: baseStyle,
    mobile:
      "text-2xl md:text-9xl font-semibold bg-gradient-to-r from-myblue via-mypurple to-mypink bg-clip-text text-transparent animate-fade-up",
  };

  return (
    <a href={href} className={`${variants[variant]} ${className}`}>
      {label}
    </a>
  );
}

export default NavbarLink;
