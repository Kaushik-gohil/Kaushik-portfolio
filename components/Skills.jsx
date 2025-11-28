"use client";

import { motion } from "framer-motion";
import { 
  DiHtml5, 
  DiCss3, 
  DiJsBadge, 
  DiReact 
} from "react-icons/di";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: DiHtml5,       name: "HTML",        color: "text-orange-500" },
    { icon: DiCss3,        name: "CSS",         color: "text-blue-500" },
    { icon: DiJsBadge,     name: "JavaScript",  color: "text-yellow-400" },
    { icon: DiReact,       name: "React",       color: "text-cyan-400" },
    { icon: SiNextdotjs,   name: "Next.js",     color: "text-white" },
    { icon: SiTailwindcss, name: "Tailwind CSS",color: "text-teal-400" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: (i) => ({
      opacity: 1, y: 0, scale: 1,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
    }),
    hover: { scale: 1.15, y: -20 }
  };

  return (
    <section id="skills" className="py-24 md:py-32 ">
      <div className="max-w-7xl mx-auto text-center px-6 sm:px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="leading-normal text-4xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent"
        >
          My Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-400 text-base mt-4 sm:text-lg mb-12 md:mb-16"
        >
          Technologies I work with daily
        </motion.p>

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-10">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover="hover"
              variants={cardVariants}
              className="group relative"
            >
              
              <div className={`hidden md:block absolute -inset-4 md:-inset-6 ${skill.color.replace('text-', 'bg-').replace('white', 'gray-400')} opacity-0 group-hover:opacity-40 blur-2xl md:blur-3xl rounded-full transition duration-1000 pointer-events-none`} />

              
              <div className="relative bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 hover:border-transparent transition-all duration-500 shadow-2xl">
                
                <div className={`text-5xl sm:text-6xl ${skill.color} group-hover:scale-125 transition-transform duration-500`}>
                  <skill.icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                </div>

                <p className="text-sm sm:text-base font-bold text-gray-200 group-hover:text-white transition">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}