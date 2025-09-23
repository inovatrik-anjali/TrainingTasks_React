import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-6 py-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left text-sm space-y-4 md:space-y-0">

                {/* Left side */}
                <p>
                    © 2025 Personal Shape. All rights reserved.
                </p>

                {/* Right side links */}
                <div className="flex flex-col md:flex-row flex-wrap md:space-x-6 space-y-2 md:space-y-0">
                    <a href="#privacy" className="hover:text-gray-300 transition">Privacy Policy</a>
                    <a href="#terms" className="hover:text-gray-300 transition">Terms of Use</a>
                    <a href="#sitemap" className="hover:text-gray-300 transition">Sitemap</a>
                    <a href="#credit" className="hover:text-gray-300 transition">Provided by TemplateMo</a>
                </div>

            </div>
        </footer>
    );
}
