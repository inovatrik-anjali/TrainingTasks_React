import React from "react";

function NavLink({ href, label, className = "" }) {
  return (
    <a
      href={href}
      className={`px-0 py-2 font-bold transition hover:text-blue-400 hover:underline ${className}`}
      style={{ fontSize: "15.2px" }}
    >
      {label}
    </a>
  );
}

export default NavLink;

