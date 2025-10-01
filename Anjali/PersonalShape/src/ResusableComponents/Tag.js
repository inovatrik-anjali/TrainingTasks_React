// Tag.js (Reusable Component)
import React from "react";

export default function Tag({ label }) {
  return (
    <span className="px-6 py-3 m-2 text-myblue text-sm font-medium border border-blue-200 rounded-full cursor-pointer hover:bg-blue hover:text-white transition">
      {label}
    </span>
  );
}
