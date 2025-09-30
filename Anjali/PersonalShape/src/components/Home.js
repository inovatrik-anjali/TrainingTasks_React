import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-myblue via-mypurple to-mypink overflow-hidden">
      {/* Subtle grid background */}
      {/* <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/square.png')] opacity-20"></div> */}

      {/* Floating gradient circles */}
      {/* <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-pink-400 rounded-full mix-blend-screen filter blur-2xl opacity-60"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      /> */}
      {/* <motion.div
        className="absolute bottom-20 right-20 w-56 h-50 bg-indigo-400 rounded-full mix-blend-screen filter blur-3xl opacity-50"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      /> */}
      {/* <motion.div
        className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-400 rounded-full mix-blend-screen filter blur-3xl opacity-40"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      /> */}

      {/* Content */}
       <br />
      <div className="relative text-center px-6 max-w-4xl">


         <motion.p
          className=" block md:hidden mt-2 text-lg md:text-xl text-white font-semibold tightest"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
         CREATIVE DESIGNER   <br />
          <br />
         
        </motion.p>
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight px-10-mt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Transforming Ideas <br />
          Into Beautiful <br />
          Experiences
           
            <br />
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I craft digital experiences that captivate, engage, and inspire <br />
          through thoughtful design and innovative solutions
        </motion.p>
             <br />
           <br />
        {/* Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="#portfolio"
            className="px-8 py-3 bg-btnbg border border-white rounded-full text-white font-semibold shadow-lg hover:bg-btnbg transition"
          >
            Explore My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
