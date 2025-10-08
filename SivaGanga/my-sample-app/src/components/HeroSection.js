import React from "react";

const HeroSection = () => {
    return (


        <section id="HeroSection" className="min-h-screen flex items-center justify-center text-white text-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden ">


            <div className="relative z-10 max-w-3xl w-full mx-auto space-y-6">

                <h3 className="text-sm sm:text-base uppercase tracking-wide">Creative Designer</h3>

                <h1 className="text-3xl mb-4 sm:text-4xl md:text-6xl font-bold leading-tight space-y-4">
                    <span className="block">Transforming Ideas</span>
                    <span className="block">Into Beautiful</span>
                    <span className="block">Experiences</span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg sm:px-4">
                    I craft digital experiences that captivate, engage, and inspire<br />
                    through thoughtful design and innovative solutions.
                </p>

                <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full hover:bg-purple-100 transition">
                    Explore My Work
                </button>
            </div>
        </section>
    );
};

export default HeroSection;