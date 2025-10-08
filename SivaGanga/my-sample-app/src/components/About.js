import React from "react";

export default function About() {
    return (
        <section id="About" className=" px-6 py-16 flex flex-col items-center">

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-purple-500 mb-12 text-center">
                About Me
            </h2>
            <div className="w-12 h-1 bg-purple-500 rounded-mb-12"></div>



            <div className="mt-12 max-w-8xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">

                <div className="flex justify-center">
                    <img
                        src="/images/aboutimg.png"
                        alt="Working at desk"
                        className="rounded-2xl shadow-xl w-full max-w-md object-cover"
                    />
                </div>


                <div className="text-start md:text-left">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 ">
                        Passionate about creating meaningful digital experiences
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        With over 5 years of experience in digital design, I specialize in
                        creating user-centered solutions that bridge the gap between
                        functionality and aesthetics. My approach combines strategic
                        thinking with creative execution to deliver impactful results.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        I believe that great design is not just about how it looks, but how
                        it works and how it makes people feel. Every project is an
                        opportunity to solve problems and create connections that matter.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        When I'm not designing, you'll find me exploring new technologies,
                        sketching ideas, or seeking inspiration in nature and architecture.
                    </p>

                    <div className=" grid grid-cols-2 md:flex flex-wrap gap-4 justify-center md:justify-start mt-12">
                        <button className="px-5 py-2 rounded-full border border-indigo-200 text-indigo-500 font-semibold hover:bg-indigo-500 transition
                         hover:text-white transform transition hover:scale-110">
                            UI/UX Design
                        </button>
                        <button className="px-5 py-2 rounded-full border border-indigo-200 text-indigo-500 font-semibold hover:bg-indigo-500  hover:text-white hover:scale-110">
                            Web Development
                        </button>
                        <button className="px-5 py-2 rounded-full border border-indigo-200 text-indigo-500 font-semibold hover:bg-indigo-500 transition hover:text-white transform transition hover:scale-110">
                            Brand Identity
                        </button>
                        <button className="px-5 py-2 rounded-full border border-indigo-200 text-indigo-500 font-semibold hover:bg-indigo-500 transition hover:text-white transform transition hover:scale-110">
                            Motion Graphics
                        </button>
                        <button className="px-5 py-2 rounded-full border border-indigo-200 text-indigo-500 font-semibold hover:bg-indigo-500 transition hover:text-white transform transition hover:scale-110">
                            Prototyping
                        </button>
                        <button className="px-5 py-2 rounded-full border border-indigo-200 text-indigo-500 font-semibold hover:bg-indigo-500 transition hover:text-white transform transition hover:scale-110">
                            Design Systems
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
