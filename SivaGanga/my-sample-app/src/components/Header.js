import React, { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="flex justify-between items-center p-6 text-black bg-white shadow-md ">
            {/* Brand */}
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Personal Shape
            </h1>

            {/* Desktop nav */}
            <nav className=" font-semibold space-x-9 hidden md:flex ">
                <a href="#" className="hover:underline hover:opacity-75 hover:text-brandBlue">Home</a>
                <a href="#" className="hover:underline hover:opacity-75 hover:text-brandBlue">About</a>
                <a href="#" className="hover:underline hover:opacity-75 hover:text-brandBlue">Portfolio</a>
                <a href="#" className="hover:underline hover:opacity-75 hover:text-brandBlue">Contact</a>
            </nav>

            {/* Hamburger button for mobile */}
            <button
                className="md:hidden p-2 focus:outline-none"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
            >
                {open ? "✖" : "☰"}
            </button>

            {/* Mobile dropdown */}
            {open && (
                <div className="fixed top-20 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-blue z-10">


                    {/* Close button */}
                    <button
                        className="absolute top-6 right-6 text-3xl text-purple-400"
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                    >

                    </button>

                    {/* Navigation links */}
                    <nav className="flex flex-col space-y-14 text-4xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        <a href="#" className="hover:underline hover:opacity-75 hover:text-brandBlue">Home</a>
                        <a href="#" className="hover:underline hover:opacity-75 hover:text-brandBlue">About</a>
                        <a href="#" className="hover:underline hover:opacity-75 hover:text-brandBlue">Portfolio</a>
                        <a href="#" className="hover:underline hover:opacity-75 hover:text-brandBlue">Contact</a>
                    </nav>
                </div>
            )}

        </header>
    );
}
