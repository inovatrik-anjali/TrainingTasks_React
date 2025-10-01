import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tag from "../ResusableComponents/Tag";

export default function AboutMe() {
  const [isDesktop, setIsDesktop] = useState(true);

  // Detect screen size to enable animation only on desktop
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768); // md breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reusable tags
  const tags = [
    "UI/UX Design",
    "Web Development",
    "Brand Identity",
    "Motion Graphics",
    "Prototyping",
    "Design Systems",
  ];

  return (
    <section className="min-h-screen flex items-center bg-mygrey w-full">
      <div className="w-full">
        {/* Section Heading */}
        <div className="text-center mt-20 mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-5xl font-medium text-myblue2">
            About Me
          </h1>

          {/* Gradient underline */}
          <div className="w-20 h-1 mx-auto mt-6 mb-12 rounded-full bg-gradient-to-r from-myblue2 via-mypurple to-myblue"></div>
        </div>

        {/* Grid Content */}
        <div className="flex flex-col md:flex-row w-full items-start md:items-center">
          {/* Left Image (slightly bigger) */}
          {isDesktop ? (
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="md:w-2/5 w-full flex justify-center"
            >
              <img
                src="/images/smiling-girl-computer-desktop.jpg"
                alt="Profile"
                className="rounded-3xl shadow-2xl w-96 h-auto object-cover"
              />
            </motion.div>
          ) : (
            <div className="w-full flex justify-center mb-6">
              <img
                src="/images/smiling-girl-computer-desktop.jpg"
                alt="Profile"
                className="rounded-3xl shadow-xl w-4/5 h-auto object-cover"
              />
            </div>
          )}

          {/* Right Text (takes remaining space) */}
          {isDesktop ? (
            <motion.div
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="md:w-3/5 flex-1 text-gray-700 p-8"
            >
              <TextContent />
              <div className="flex flex-wrap bg-gray-50 p-6 mt-6 rounded-xl shadow-sm">
                {tags.map((tag, index) => (
                  <Tag key={index} label={tag} />
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="text-gray-700 p-6">
              <TextContent />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50 mt-6 rounded-xl shadow-sm">
                {tags.map((tag, index) => (
                  <Tag key={index} label={tag} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Text Content Component
function TextContent() {
  return (
    <>
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
        Passionate about creating meaningful digital experiences
      </h3>

      <p className="text-lg md:text-xl mb-4 leading-normal">
        With over 5 years of experience in digital design, I specialize in
        creating user-centered solutions that bridge the gap between
        functionality and aesthetics. My approach combines strategic thinking
        with creative execution to deliver impactful results.
      </p>

      <p className="text-lg md:text-xl mb-4 leading-relaxed">
        I believe that great design is not just about how it looks, but how it
        works and how it makes people feel. Every project is an opportunity to
        solve problems and create connections that matter.
      </p>

      <p className="text-lg md:text-xl mb-4 leading-relaxed">
        When I'm not designing, you'll find me exploring new technologies,
        sketching ideas, or seeking inspiration in nature and architecture.
      </p>
    </>
  );
}
