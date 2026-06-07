"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FolderGit2, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useCallback } from "react";

// Inline GitHub SVG
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

export interface Project {
  id: string | number;
  title: string;
  description: string;
  tech_stack: string[];
  github_url: string;
  live_url?: string;
  image?: string;
  images?: string[]; // multiple screenshots
}

// ── Carousel component ────────────────────────────────────────────────────────
function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (dir: number, e: React.MouseEvent) => {
      e.stopPropagation();
      setDirection(dir);
      setCurrent((prev) => (prev + dir + images.length) % images.length);
    },
    [images.length]
  );

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.35, ease: "easeOut" as const } },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0, transition: { duration: 0.25 } }),
  };

  return (
    <div className="relative h-64 w-full overflow-hidden bg-black/40 group/carousel">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover/carousel:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
            unoptimized
          />
          {/* Bottom gradient to blend smoothly into the card body */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c16] via-[#0c0c16]/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next arrows — only visible when >1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => paginate(-1, e)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover/carousel:opacity-100 hover:scale-110 hover:bg-black/60 hover:text-indigo-300"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => paginate(1, e)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover/carousel:opacity-100 hover:scale-110 hover:bg-black/60 hover:text-indigo-300"
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)]" : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>

          {/* Counter badge */}
          <span className="absolute top-4 right-4 z-10 flex items-center justify-center rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-xs font-medium tracking-wide text-white/90 backdrop-blur-md shadow-lg">
            {current + 1} <span className="mx-1 text-white/40">/</span> {images.length}
          </span>
        </>
      )}
    </div>
  );
}

// ── Main list ────────────────────────────────────────────────────────────────
export function ProjectsList({ projects }: { projects: Project[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
  };

  return (
    <motion.div
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {projects.map((project, index) => {
        // Normalise: prefer `images[]`, fall back to single `image`
        const allImages = project.images?.length
          ? project.images
          : project.image
            ? [project.image]
            : [];

        return (
          <motion.div
            key={project.id || index}
            variants={itemVariants}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-[#0c0c16] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/30 hover:shadow-[0_10px_40px_-15px_rgba(99,102,241,0.4)]"
          >
            {/* Glow effect that follows the card on hover */}
            <div className="absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent" />
            </div>

            {/* Carousel or single image */}
            <div className="relative z-10">
              {allImages.length > 0 && (
                <ProjectCarousel images={allImages} title={project.title} />
              )}
            </div>

            <div className="relative z-10 flex flex-1 flex-col justify-between p-8">
              {/* Top Icons */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:text-indigo-300">
                  <FolderGit2 className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-4">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 transition-colors hover:text-indigo-400"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="h-6 w-6" />
                    </a>
                  )}
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 transition-colors hover:text-indigo-400"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-indigo-300">
                  {project.title}
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-zinc-400 font-light line-clamp-4 group-hover:text-zinc-300 transition-colors duration-300">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.tech_stack.map((tech, tIndex) => (
                  <span
                    key={tIndex}
                    className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-indigo-300 backdrop-blur-md transition-all duration-300 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
