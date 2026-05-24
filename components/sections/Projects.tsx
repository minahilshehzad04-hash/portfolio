import { supabase } from "@/lib/supabase";
import { ProjectsList, Project } from "./ProjectsList";

// Fallback data in case the provided supabase keys or tables are not fully configured yet
const FALLBACK_PROJECTS: Project[] = [
  {
    id: "1",
    title: "VisionCraft - AI Video Generator",
    description: "An AI-powered video synthesis platform that builds intelligent dynamic scenes from textual descriptions, leveraging complex generative rendering techniques.",
    tech_stack: ["Next.js", "Python", "Supabase", "Remotion", "Tailwind CSS"],
    github_url: "https://github.com/minahilshehzad04-hash",
    image: "/projects/visioncraft.png",
  },
  {
    id: "2",
    title: "HemaAI - Blood Cancer Detection",
    description: "An automated diagnostic interface to assist oncologists, merging image processing capabilities with rich diagnostic metrics.",
    tech_stack: ["React Native", "FastAPI", "TensorFlow", "PostgreSQL"],
    github_url: "https://github.com/minahilshehzad04-hash",
    image: "/projects/hemaai.png",
  },
  {
    id: "3",
    title: "Skillify - Code Learning Hub",
    description: "Interactive programming ecosystem allowing students to execute logic on the fly while progressing through an intelligent curriculum.",
    tech_stack: ["React Native", "GraphQL", "Node.js"],
    github_url: "https://github.com/minahilshehzad04-hash",
    image: "/projects/skillify.png",
  },
  {
    id: "4",
    title: "GapMind - AI Skill Gap Analyzer",
    description: "An AI-powered platform that analyzes user skills against industry requirements, generating personalized learning recommendations to bridge professional skill gaps.",
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Hugging Face"],
    github_url: "https://github.com/minahilshehzad04-hash",
    image: "/projects/gapmind.png",
  },
  {
    id: "5",
    title: "RailEase - Railway Management System",
    description: "A comprehensive railway management system supporting train scheduling, ticket booking, and passenger management via a relational database schema.",
    tech_stack: ["HTML", "CSS", "JavaScript", "Node.js", "PostgreSQL"],
    github_url: "https://github.com/minahilshehzad04-hash",
    image: "/projects/railease.png",
  },
  {
    id: "6",
    title: "Wellhub - Wellness & Fitness Platform",
    description: "A modern, accessible digital wellness ecosystem designed to help users track health metrics and access customized routines.",
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github_url: "https://github.com/minahilshehzad04-hash",
    image: "/projects/wellhub.png",
  }
];

export async function Projects() {
  let projects: Project[] = [];
  
  try {
    const { data, error } = await supabase.from('projects').select('*');
    
    // Safely assign data if it exists and looks like an array, otherwise fallback
    if (error || !data || data.length === 0) {
      console.log("Supabase fetch returned empty/error or table doesn't exist, using fallback data.");
      projects = FALLBACK_PROJECTS;
    } else {
      projects = data as Project[];
    }
  } catch (error) {
    console.error("Failed to fetch projects from supabase:", error);
    projects = FALLBACK_PROJECTS;
  }

  return (
    <section id="projects" className="relative flex min-h-screen items-center justify-center bg-[#010108] px-4 py-24 sm:py-32 lg:px-8 overflow-hidden text-white">
      {/* Background aesthetics */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full bg-indigo-900/10 blur-[150px]" />
      
      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Featured Projects.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400 font-light">
            A selection of my recent software architecture and AI-powered implementations.
          </p>
        </div>

        {/* Client-side animated layout component */}
        <ProjectsList projects={projects} />
        
        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/minahilshehzad04-hash"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/10 active:scale-95"
          >
            Explore Full GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
