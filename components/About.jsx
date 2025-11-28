"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl md:text-7xl font-black text-center mb-16 md:mb-20 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent leading-tight"
        style={{ lineHeight: "0.9" }}
      >
        About Me
      </motion.h2>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="space-y-8 order-2 md:order-1">
            <motion.h3
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight"
            >
              Hey, I’m{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Kaushik Gohil
              </span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="space-y-5 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              <p>
                I’m a{" "}
                <span className="text-blue-400 font-bold text-xl sm:text-2xl">
                  Web Designer
                </span>{" "}
                obsessed with crafting stunning, modern, and buttery-smooth
                digital experiences.
              </p>
              <p>
                Currently in my final year of{" "}
                <span className="text-cyan-300 font-semibold">BCA (2025)</span>,
                I’ve already got{" "}
                <span className="text-blue-400 font-bold">
                  2+ years of experience
                </span>{" "}
                in Figma, UI/UX, Tailwind, Framer Motion.
              </p>
              <p>
                My goal? To create designs that make people say{" "}
                <span className="text-cyan-300 italic underline decoration-wavy decoration-blue-400 underline-offset-4">
                  “Damn, that’s smooth!”
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg rounded-full hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 transition text-center"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-gray-600 text-white font-semibold text-lg rounded-full hover:border-cyan-400 hover:text-cyan-400 transition text-center"
              >
                See My Work
              </a>
            </motion.div>
          </div>

       
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.4,
              type: "spring",
              stiffness: 70,
            }}
            className="flex justify-center order-1 md:order-2"
          >
            <div className="relative group w-full max-w-[265px] sm:max-w-md md:max-w-lg">
              {/* Main Card */}
              <div className="relative z-10 w-full aspect-square rounded-3xl bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-cyan-900/30 backdrop-blur-2xl border border-white/20 p-8 sm:p-10 md:p-12 flex flex-col items-center justify-center text-center shadow-2xl">
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-7xl sm:text-8xl md:text-9xl font-black bg-gradient-to-br from-blue-400 via-cyan-300 to-white bg-[length:200%_200%] bg-clip-text text-transparent"
                >
                  KG
                </motion.div>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-6">
                  Kaushik Gohil
                </p>
                <p className="text-lg sm:text-xl text-blue-300 mt-2">
                  Web Designer
                </p>
              </div>

              {/* Pulsing Glow */}
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="hidden md:block absolute -inset-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-3xl blur-3xl opacity-40 -z-10"
              />

              {/* Hover Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition duration-1000 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
