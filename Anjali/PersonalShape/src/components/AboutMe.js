import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="min-h-screen bg-mygrey px-6 md:px-16 py-24 flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-myblue leading-tight">
            About Me
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-myblue2 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Image - smaller column */}
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="md:col-span-4 flex justify-center md:justify-end mr-8"
          >
            <img
              src="/images/smiling-girl-computer-desktop.jpg"
              alt="Profile"
              className="w-full max-w-[400px] h-auto rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Right Text - larger column */}
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="md:col-span-8 text-gray-700 flex flex-col justify-start"
          >
            <h3 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight max-w-[600px]">
  Passionate about creating meaningful<br/> digital experiences
</h3>

            <p className="mb-6 text-lg leading-relaxed">
              With over 5 years of experience in digital design, I specialize in
              creating user-centered solutions that bridge the gap between
              functionality and aesthetics. My approach combines strategic
              thinking with creative execution to deliver impactful results.
            </p>

            <p className="text-lg leading-relaxed">
              I believe that great design is not just about how it looks, but how
              it works and how it makes people feel. Every project is an
              opportunity to solve problems and create connections that matter.
            </p>

             <p className="mt-6 text-lg leading-relaxed">
             When I'm not designing, you'll find me exploring new technologies, sketching ideas, or seeking inspiration in nature and architecture.
            </p>


          </motion.div>

        </div>
      </div>
    </section>
  );
}
