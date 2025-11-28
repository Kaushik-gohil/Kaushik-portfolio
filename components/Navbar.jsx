"use client";
import { useState } from "react";
import { HiMiniBars3, HiXMark } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  const menuVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1, transition: { duration: 0.4, when: "beforeChildren", staggerChildren: 0.1 } }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 50, filter: "blur(10px)" },
    open: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7 } }
  };

  
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setOpen(false); 

    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <>
      <nav className="w-full fixed top-0 left-0 bg-[#0a0e1a]/90 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <a href="#home" className="text-3xl font-black text-white tracking-wider select-none">
            KG
          </a>

          {/* Desktop */}
          <ul className="hidden lg:flex gap-12 text-white text-lg">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative group block px-10 h-10 overflow-hidden"
                >
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
                    {item}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center text-blue-400 font-bold translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                    {item}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white text-4xl hover:text-cyan-400 transition"
          >
            <HiMiniBars3 />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[9999] flex flex-col justify-center items-center"
          onClick={() => setOpen(false)}
        >
          <motion.button
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            className="absolute top-10 right-8 text-6xl text-white hover:text-cyan-400 transition"
          >
            <HiXMark />
          </motion.button>

          <div className="text-center space-y-10">
            {navItems.map((item) => (
              <motion.div
                key={item}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="block relative"
                >
                  <span className="text-4xl md:text-5xl font-black text-white tracking-wider">
                    {item}
                  </span>
                  <span className="absolute inset-0 text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
                    {item}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}