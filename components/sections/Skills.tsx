"use client";

import { motion } from "framer-motion";
import { LayoutTemplate, Server, Wrench } from "lucide-react";

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: <LayoutTemplate className="h-6 w-6 text-cyan-400" />,
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5"],
      color: "border-cyan-500/20",
      bgHover: "hover:border-cyan-500/50",
    },
    {
      title: "Backend & DB",
      icon: <Server className="h-6 w-6 text-indigo-400" />,
      skills: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Supabase", "REST APIs"],
      color: "border-indigo-500/20",
      bgHover: "hover:border-indigo-500/50",
    },
    {
      title: "Tools",
      icon: <Wrench className="h-6 w-6 text-violet-400" />,
      skills: ["Git", "GitHub", "Vercel", "VS Code", "Postman", "Figma"],
      color: "border-violet-500/20",
      bgHover: "hover:border-violet-500/50",
    },
  ];

  return (
    <section id="skills" className="relative flex min-h-screen items-center justify-center bg-[#030010] px-4 py-24 sm:py-32 lg:px-8 overflow-hidden text-white">
      <div className="absolute top-1/2 left-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-900/10 blur-[150px]" />
      
      <motion.div
        className="container relative z-10 mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-16 md:mb-24 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Technical Stack.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400 font-light">
            My toolkit for building high-performance, robust, and scalable software solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-3xl border bg-black/40 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] ${category.color} ${category.bgHover}`}
            >
              <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 -inset-px rounded-3xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
              
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
