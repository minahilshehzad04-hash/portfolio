"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import Image from "next/image";

// Inline GitHub SVG as fallback for lucide-react missing export
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
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
}

export function ProjectsList({ projects }: { projects: Project[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id || index}
          variants={itemVariants}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
        >
          {/* Screenshot Image */}
          {project.image && (
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Gradient overlay for smooth transition to card body */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-80" />
            </div>
          )}

          <div className="flex flex-1 flex-col justify-between p-6">
            {/* Top Icons */}
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-lg bg-indigo-500/20 p-3 text-indigo-400">
                <FolderGit2 className="h-6 w-6" />
              </div>
              <div className="flex items-center gap-3">
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 transition-colors hover:text-white"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                )}
                {project.live_url && (
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 transition-colors hover:text-white"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-indigo-300">
                {project.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-zinc-400 font-light line-clamp-4">
                {project.description}
              </p>
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-4">
              {project.tech_stack.map((tech, tIndex) => (
                <span
                  key={tIndex}
                  className="rounded text-xs font-medium text-cyan-300 tracking-wide"
                >
                  {tech}
                  {tIndex < project.tech_stack.length - 1 && <span className="ml-2 text-zinc-600">•</span>}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
