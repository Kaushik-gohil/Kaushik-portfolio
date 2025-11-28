"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      desc: "Modern animated portfolio with glassmorphism & smooth animations",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      live: "https://your-portfolio.com",
      image: "/projects/portfolio.jpg",
    },
    {
      title: "E-Commerce Store",
      desc: "Fully responsive online store with cart & payment integration",
      tags: ["React", "Node.js", "MongoDB"],
      live: "https://shopdemo.com",
      image: "/projects/ecom.jpg",
    },
    {
      title: "Task Manager App",
      desc: "Beautiful productivity app with drag & drop functionality",
      tags: ["Next.js", "Prisma", "TypeScript"],
      live: "https://taskapp.com",
      image: "/projects/task.jpg",
    },
    
  ];

  return (
    <section id="projects" className="py-24 md:py-32 px-6 ">
      {/* Heading */}
      <div className="text-center mb-16 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="leading-normal text-4xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mt-4 text-lg"
        >
          Some of my recent work
        </motion.p>
      </div>

      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative h-full"
            >
              {/* Card Container */}
              <div className="h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-cyan-500/30 hover:scale-[1.03] hover:-translate-y-2">
                {/* Image */}
                <div className="relative overflow-hidden h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Live Badge */}
                  <div className="absolute top-4 right-4 bg-green-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    LIVE
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:scale-105 transition shadow-lg shadow-cyan-500/30"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
