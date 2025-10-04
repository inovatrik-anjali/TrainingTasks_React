import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tag from "../ResusableComponents/Tag";

export default function AboutMe() {
  const [isDesktop, setIsDesktop] = useState(true);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <h1
            className={`font-medium text-myblue2 ${
              isDesktop ? "text-5xl" : "text-5xl"
            }`}
          >
            About Me
          </h1>
          <div className="w-20 h-1 mx-auto mt-6 mb-12 rounded-full bg-gradient-to-r from-myblue2 via-mypurple to-myblue"></div>
        </div>

        {/* Grid Content with gap and side padding */}
        <div className="flex flex-col md:flex-row w-full items-start md:items-center md:gap-x-12 px-6 md:px-12">
          {/* Left Image */}
          <motion.div
            initial={{ x: isDesktop ? -150 : -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: isDesktop ? 1 : 0.7 }}
            className={`flex justify-center mb-6 ${
              isDesktop ? "md:w-2/5 w-full" : "w-4/5 mx-auto"
            }`}
          >
            <img
              src="/images/smiling-girl-computer-desktop.jpg"
              alt="Profile"
              className={`rounded-3xl shadow-2xl object-cover ${
                isDesktop ? "w-full max-w-[350px] h-auto" : "w-full h-auto"
              }`}
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ x: isDesktop ? 150 : 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: isDesktop ? 1 : 0.7 }}
            className={`flex-1 text-gray-700 p-6 ${
              isDesktop ? "md:w-3/5" : "w-full"
            }`}
          >
            <TextContent isDesktop={isDesktop} />

            {/* Tags */}
         <div
  className={`mt-6 p-6 rounded-xl shadow-sm bg-gray-50
    grid grid-cols-2 md:grid-cols-4 gap-3`}
>
  {tags.map((tag, index) => (
    <Tag key={index} label={tag} />
  ))}
</div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Text Content Component
function TextContent({ isDesktop }) {
  const paragraphClass = `${isDesktop ? "text-base" : "text-lg"} mb-6 leading-relaxed`;

  return (
    <>
      <h3
        className={`font-semibold text-gray-900 mb-6 ${
          isDesktop ? "text-4xl md:-mt-6" : "text-3xl"
        }`}
      >
        Passionate about creating meaningful <br />digital experiences
      </h3>

      <p className={paragraphClass}>
        With over 5 years of experience in digital design, I specialize in
        creating user-centered solutions that bridge the gap between
        functionality and aesthetics. My approach combines strategic thinking
        with creative execution to deliver impactful results.
      </p>

      <p className={paragraphClass}>
        I believe that great design is not just about how it looks, but how it
        works and how it makes people feel. Every project is an opportunity to
        solve problems and create connections that matter.
      </p>

      <p className={paragraphClass}>
        When I'm not designing, you'll find me exploring new technologies,
        sketching ideas, or seeking inspiration in nature and architecture.
      </p>
    </>
  );
}
