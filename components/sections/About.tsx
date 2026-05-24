"use client";

import { motion } from "framer-motion";
import { GraduationCap, BrainCircuit, Target, Sparkles, MapPin } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center bg-[#050505] px-4 py-24 sm:py-32 lg:px-8 overflow-hidden text-white">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-900/10 blur-[150px]" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-900/10 blur-[120px]" />

      <motion.div
        className="container relative z-10 mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              About Me.
            </h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent max-w-sm mt-2" />
          </div>
        </motion.div>

        {/* Premium Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Main Intro Box - Spans 3 columns */}
          <motion.div variants={itemVariants} className="md:col-span-3 rounded-3xl border border-white/5 bg-white/5 p-8 lg:p-10 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/10 flex flex-col justify-center">
            <div className="mb-4 inline-flex rounded-xl bg-violet-500/10 p-3 text-violet-400 w-fit">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">The architecture behind the aesthetics</h3>
            <p className="text-lg leading-relaxed text-zinc-400 font-light max-w-3xl">
              Hi, I'm Minahil Shahzad, a passionate Software Engineering student dedicated to bridging the gap between elegant UI/UX and complex backend logic. Whether it's building AI-driven video generators, robust medical diagnostics, or high-performance React architectures, I believe that truly great engineering should feel entirely invisible to the end user.
            </p>
          </motion.div>

          {/* Availability / Status Box - Spans 1 column */}
          <motion.div variants={itemVariants} className="md:col-span-1 rounded-3xl border border-white/5 bg-gradient-to-br from-emerald-500/5 to-transparent p-8 backdrop-blur-md transition-all hover:border-emerald-500/30 flex flex-col items-center justify-center text-center group">
            <div className="relative flex h-16 w-16 items-center justify-center mb-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-20"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></span>
            </div>
            <h3 className="font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Available</h3>
            <p className="text-sm text-zinc-400 font-light">Open for new opportunities</p>
          </motion.div>

          {/* Education Box - Spans 1 column */}
          <motion.div variants={itemVariants} className="md:col-span-1 rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 group flex flex-col">
            <div className="mb-auto">
              <div className="mb-6 inline-flex rounded-xl bg-indigo-500/10 p-3 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Education</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                <strong className="text-zinc-200">BS Software Engineering</strong>
                <br />Comsats University
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/5 text-xs text-zinc-500 uppercase tracking-widest font-semibold">
              Class of 2026
            </div>
          </motion.div>

          {/* Specialization Box - Spans 2 columns */}
          <motion.div variants={itemVariants} className="md:col-span-2 rounded-3xl border border-white/5 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 p-8 backdrop-blur-md transition-all hover:border-cyan-500/20 group">
            <div className="mb-6 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-400 group-hover:scale-110 transition-all">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-white">Focus & Specialization</h3>
            <p className="text-base text-zinc-400 leading-relaxed font-light">
              My true passion lies in integrating cutting-edge AI technologies into modern web and mobile ecosystems. I thrive on translating abstract concepts into highly engaging, robust, and user-centric software solutions that scale flawlessly.
            </p>
          </motion.div>

          {/* Goals Box - Spans 1 column */}
          <motion.div variants={itemVariants} className="md:col-span-1 rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 group">
            <div className="mb-6 inline-flex rounded-xl bg-pink-500/10 p-3 text-pink-400 group-hover:scale-110 transition-transform">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Career Goal</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              To engineer intelligent platforms that pioneer next-gen user productivity on a global scale.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
