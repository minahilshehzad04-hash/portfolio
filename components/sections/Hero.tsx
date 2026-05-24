"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  // Antigravity floating effect for background spheres
  const floatingVariants = {
    animate: (custom: number) => ({
      y: [0, -30 * custom, 0],
      x: [0, 20 * custom, 0],
      transition: {
        duration: 8 + custom,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    }),
  };

  const name = "Minahil Shahzad";

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030014] text-white"
    >
      {/* Antigravity Floating Background Elements */}
      <div className="absolute inset-0 z-0">
         <motion.div
          custom={1}
          variants={floatingVariants}
          animate={mounted ? "animate" : undefined}
          className="absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[120px]"
        />
        <motion.div
          custom={1.5}
          variants={floatingVariants}
          animate={mounted ? "animate" : undefined}
          className="absolute bottom-1/4 right-1/4 h-80 w-80 translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-600/20 blur-[100px]"
        />
        <motion.div
          custom={0.8}
          variants={floatingVariants}
          animate={mounted ? "animate" : undefined}
          className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-900/20 blur-[150px]"
        />
        {/* Subtle glowing particles/stars could go here */}
        <div className="absolute top-1/3 left-1/5 w-2 h-2 rounded-full bg-white/40 shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
      </div>

      <motion.div
        className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8 mt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium tracking-wide text-cyan-300 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for Opportunities
          </span>
        </motion.div>

        <motion.h1 className="mx-auto mb-4 max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl flex justify-center flex-wrap gap-x-4">
          {name.split(" ").map((word, wordIndex) => (
             <span key={wordIndex} className="inline-block">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${wordIndex}-${charIndex}`}
                    variants={{
                       hidden: { opacity: 0, y: 50 },
                       visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: (wordIndex * 5 + charIndex) * 0.05 + 0.3 } }
                    }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70"
                  >
                    {char}
                  </motion.span>
                ))}
            </span>
          ))}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="mx-auto mb-6 max-w-3xl bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-xl font-bold tracking-tight text-transparent sm:text-3xl lg:text-4xl"
        >
          Software Engineer <span className="text-zinc-600 font-light px-2">|</span> AI-Powered Web Applications Builder
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 sm:text-xl leading-relaxed font-light"
        >
          Building highly scalable, intelligent, and visually stunning digital experiences. Specializing in modern React ecosystems and AI integrations.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-[spin_4s_linear_infinite]" />
            <span className="relative flex items-center justify-center gap-2 rounded-full bg-[#030014] px-8 py-3.5 transition-all group-hover:bg-opacity-0">
              View Projects
            </span>
          </a>
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/10 active:scale-95"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
      
      {/* Bottom fade out to next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}

