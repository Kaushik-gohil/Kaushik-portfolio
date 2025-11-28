"use client";

import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker, HiHeart } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 overflow-hidden bg-gray-950/90 backdrop-blur-2xl border-t border-gray-800">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-cyan-900/20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-5xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              KG
            </h3>
            <p className="text-xl font-bold text-white">Kaushik Gohil</p>
            <p className="text-gray-400">Web Designer & Frontend Developer</p>
          </motion.div>

          {/* Center - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-2xl font-bold text-white mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-300 transition duration-300 hover:translate-x-2 inline-block"
                  >
                    → {item}
                  </a>
                )
              )}
            </div>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-bold text-white">Reach Me</h4>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-center justify-center md:justify-start gap-3">
                <a
                  href="mailto:gohilkaushik04@gmail.com"
                  className="flex items-center justify-center md:justify-start gap-3 text-lg hover:text-cyan-300 transition group"
                >
                  <HiMail className="text-cyan-400 group-hover:scale-110 transition" />
                  <span>gohilkaushik04@gmail.com</span>
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3">
                <a
                  href="tel:+917096642156"
                  className="flex items-center justify-center md:justify-start gap-3 text-lg hover:text-cyan-300 transition group"
                >
                  <HiPhone className="text-cyan-400 group-hover:scale-110 transition" />
                  <span>+91 7096642156</span>
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3">
                <HiLocationMarker className="text-cyan-400" /> Surat, Gujarat
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <HiHeart className="text-red-500 inline" />
            </motion.span>
            by Kaushik Gohil © 2025
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Inspired by passion, powered by code
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
