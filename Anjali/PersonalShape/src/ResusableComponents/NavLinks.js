import React from "react";
import { Link } from "react-router-dom";

function NavLink({ to, label, className = "" }) {
  return (
    <Link
      to={to}
      className={`px-0 py-2 font-bold transition hover:text-blue-400 hover:underline ${className}`}
      style={{ fontSize: "15.2px" }}
    >
      {label}
    </Link>
  );
}

export default NavLink;

