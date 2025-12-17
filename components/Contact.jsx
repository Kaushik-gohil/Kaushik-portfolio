"use client";

import { motion } from "framer-motion";
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiPaperAirplane 
} from "react-icons/hi";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0  pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-10"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Let’s Build Something{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Epic
              </span>
            </h3>

            <p className="text-xl text-gray-300 leading-relaxed">
              Freelance available • Fast response • Clean code • Pixel-perfect design
            </p>

            <div className="space-y-6">
              <motion.a
                href="mailto:gohilkaushik04@gmail.com"
                className="flex items-center gap-5 text-lg group"
                whileHover={{ x: 15 }}
              >
                <HiMail className="w-8 h-8 text-cyan-400 group-hover:scale-125 transition" />
                <span className="text-gray-200 group-hover:text-cyan-300 transition">
                  gohilkaushik04@gmail.com
                </span>
              </motion.a>

              <motion.a
                href="tel:+917096642156"
                className="flex items-center gap-5 text-lg group"
                whileHover={{ x: 15 }}
              >
                <HiPhone className="w-8 h-8 text-cyan-400 group-hover:scale-125 transition" />
                <span className="text-gray-200 group-hover:text-cyan-300 transition">
                  +91 7096642156
                </span>
              </motion.a>

              <motion.div
                className="flex items-center gap-5 text-lg group"
                whileHover={{ x: 15 }}
              >
                <HiLocationMarker className="w-8 h-8 text-cyan-400 group-hover:scale-125 transition" />
                <span className="text-gray-200 group-hover:text-cyan-300 transition">
                  Surat, Gujarat, India
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="bg-gray-900/60 backdrop-blur-2xl border border-gray-700 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
              <h3 className="text-3xl font-bold text-white mb-8">Drop a Message</h3>

              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500 transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500 transition"
                />
                <textarea
                  rows={5}
                  placeholder="Your Message..."
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500 resize-none transition"
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-cyan-500/40 flex items-center justify-center gap-3 hover:shadow-cyan-500/60 transition"
                >
                  Send Message
                  <HiPaperAirplane className="w-6 h-6 -rotate-45" />
                </motion.button>
              </form>

              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
