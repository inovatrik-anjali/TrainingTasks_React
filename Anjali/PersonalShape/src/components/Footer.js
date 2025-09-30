import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 text-white px-6 py-6 w-full">
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left text-sm space-y-4 md:space-y-0">

        {/* Left side */}
        <p>
          © {new Date().getFullYear()} Personal Shape. All rights reserved.
        </p>

        {/* Right side links */}
        <div className="flex flex-col md:flex-row flex-wrap md:space-x-6 space-y-2 md:space-y-0">
          <a href="#privacy" className="underline md:no-underline md:hover:underline hover:text-gray-300 transition">
            Privacy Policy
          </a>
          <a href="#terms" className="underline md:no-underline md:hover:underline hover:text-gray-300 transition">
            Terms of Use
          </a>
          <a href="#sitemap" className="underline md:no-underline md:hover:underline hover:text-gray-300 transition">
            Sitemap
          </a>
          <a href="#credit" className="underline md:no-underline md:hover:underline hover:text-gray-300 transition">
            Provided by TemplateMo
          </a>
        </div>

      </div>
    </footer>
  );
}
