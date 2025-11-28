"use client";

import { motion } from "framer-motion";

export default function Home() {
  const headingWords = ["Hi,", "I", "’m", "Kaushik"];
  const secheadingWords = ["An", "Web", "Designer"];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const wordAnim = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <section id="home" className="relative h-[700px] text-white flex items-center justify-start overflow-hidden">
      
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 180, ease: "linear" }}
        className="hidden md:block absolute w-[500px] h-[500px] border border-blue-700 opacity-25 rounded-lg top-[-120px] left-[-180px]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 250, ease: "linear" }}
        className="hidden md:block absolute w-[400px] h-[400px] border border-blue-600 opacity-25 rounded-full bottom-[-100px] right-[-120px]"
      />
      <motion.div
        animate={{ rotate: 180 }}
        transition={{ repeat: Infinity, duration: 300, ease: "linear" }}
        className="hidden md:block absolute w-[600px] h-[600px] border border-indigo-700 opacity-15 rounded-full top-[-150px] right-[-200px]"
      />

      {/* Content */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col justify-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Heading with staggered words */}
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-snug md:leading-tight flex flex-wrap gap-2">
          {headingWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordAnim}
              className={["Kaushik", "Gohil"].includes(word) ? "" : ""}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight flex flex-wrap gap-2">
          {secheadingWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordAnim}
              className={
                ["Web", "Designer"].includes(word) ? "text-blue-500" : ""
              }
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={wordAnim}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed"
        >
          I’m Passionte About Crafting Experience That Are Engaging,Accessible,
          And User-Centric
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-6 pt-6"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg rounded-full hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 transition"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border-2 border-gray-600 text-white font-semibold text-lg rounded-full hover:border-white hover:text-white  transition"
          >
            See My Work →
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
}
