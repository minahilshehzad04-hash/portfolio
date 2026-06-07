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
    live_url: "https://visioncraft-4bh5.vercel.app",
    images: [
      "/projects/visioncraft-1.png",
      "/projects/visioncraft-2.png",
      "/projects/visioncraft-3.png",
      "/projects/visioncraft-4.png",
      "/projects/visioncraft-5.png",
      "/projects/visioncraft-6.png",
      "/projects/visioncraft-7.png",
    ],
  },
  {
    id: "2",
    title: "HemaAI - Blood Cancer Detection",
    description: "An automated diagnostic interface to assist oncologists, merging image processing capabilities with rich diagnostic metrics.",
    tech_stack: ["React Native", "FastAPI", "TensorFlow", "PostgreSQL"],
    github_url: "https://github.com/minahilshehzad04-hash",
    live_url: "https://hema-ai-blond.vercel.app",
    images: [
      "/projects/hemaai-1.png",
      "/projects/hemaai-2.png",
      "/projects/hemaai-3.png",
      "/projects/hemaai-4.png",
      "/projects/hemaai-5.png",
      "/projects/hemaai-6.png",
      "/projects/hemaai-7.png",
      "/projects/hemaai-8.png",
    ],
  },
  {
    id: "3",
    title: "Skillify - Code Learning Hub",
    description: "Interactive programming ecosystem allowing students to execute logic on the fly while progressing through an intelligent curriculum.",
    tech_stack: ["React Native", "GraphQL", "Node.js"],
    github_url: "https://github.com/minahilshehzad04-hash",
    images: [
      "/projects/skillify-1.jpeg",
      "/projects/skillify-2.jpeg",
      "/projects/skillify-3.jpeg",
      "/projects/skillify-4.jpeg",
      "/projects/skillify-5.jpeg",
      "/projects/skillify-6.jpeg",
      "/projects/skillify-7.jpeg",
    ],
  },
  {
    id: "4",
    title: "GapMind - AI Skill Gap Analyzer",
    description: "An AI-powered platform that analyzes user skills against industry requirements, generating personalized learning recommendations to bridge professional skill gaps.",
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Hugging Face"],
    github_url: "https://github.com/minahilshehzad04-hash",
    live_url: "https://gapmind-qh16.vercel.app",
    images: [
      "/projects/gapmind-1.png",
      "/projects/gapmind-2.png",
      "/projects/gapmind-3.png",
      "/projects/gapmind-4.png",
    ],
  },
  {
    id: "5",
    title: "RailEase - Railway Management System",
    description: "A comprehensive railway management system supporting train scheduling, ticket booking, and passenger management via a relational database schema.",
    tech_stack: ["HTML", "CSS", "JavaScript", "Node.js", "PostgreSQL"],
    github_url: "https://github.com/minahilshehzad04-hash",
    images: [
      "/projects/RailEase-1.png",
      "/projects/RailEase-2.png",
      "/projects/RailEase-3.png",
      "/projects/RailEase-4.png",
      "/projects/RailEase-5.png",
      "/projects/RailEase-6.png",
    ],
  },
  {
    id: "6",
    title: "AI Life Admin Assistant",
    description: "An intelligent personal memory and organization tool powered by Retrieval-Augmented Generation (RAG). It securely retrieves relevant personal data on the fly, reducing AI hallucinations and allowing users to seamlessly manage their daily lives.",
    tech_stack: ["Next.js", "Python", "Supabase", "Gemini API"],
    github_url: "https://github.com/minahilshehzad04-hash/AIlifeAssistant",
    live_url: "https://a-ilife-assistant-xgyl.vercel.app",
    images: [
      "/projects/AIlifeAssistant-1.png",
      "/projects/AIlifeAssistant-2.png",
      "/projects/AIlifeAssistant-3.png",
      "/projects/AIlifeAssistant-4.png",
    ],
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
