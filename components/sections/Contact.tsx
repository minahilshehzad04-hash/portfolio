"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";

// Inline GitHub SVG as fallback for lucide-react missing export
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="relative flex min-h-screen items-center justify-center bg-[#020202] px-4 py-24 sm:py-32 lg:px-8 overflow-hidden text-white">
      <div className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-violet-900/10 blur-[150px]" />
      
      <motion.div
        className="container relative z-10 mx-auto max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-16 md:mb-20 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl mb-4">
            Let's build something together.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400 font-light">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Contact Information & Socials */}
          <motion.div variants={itemVariants} className="flex flex-col gap-8">
            <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="mb-6 text-2xl font-bold">Get In Touch</h3>
              
              <div className="flex flex-col gap-6">
                <a
                  href="mailto:minahilshehzad04@gmail.com"
                  className="group flex items-center gap-4 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-all">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-500">Email</p>
                    <p className="text-zinc-200 group-hover:text-violet-400 transition-colors">minahilshehzad04@gmail.com</p>
                  </div>
                </a>

                <div className="my-2 h-px w-full bg-white/5" />
                
                <p className="text-sm text-zinc-400 leading-relaxed font-light mb-2">
                  My inbox is always open. Whether it's a project proposal or a casual greeting, I'll try my best to get back to you!
                </p>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/minahilshehzad04-hash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black text-zinc-400 text-lg transition-all hover:-translate-y-1 hover:border-zinc-500 hover:text-white hover:shadow-lg shadow-black/50"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/minahilshehzad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0A66C2]/10 text-[#0A66C2] text-lg transition-all hover:-translate-y-1 hover:bg-[#0A66C2] hover:text-white hover:shadow-lg shadow-[#0A66C2]/20"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            {isSubmitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center backdrop-blur-xl">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="mb-6 rounded-full bg-emerald-500/20 p-4 text-emerald-400"
                >
                  <CheckCircle2 className="h-12 w-12" />
                </motion.div>
                <h3 className="mb-2 text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-zinc-400 font-light">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Hi Minahil, I'd like to talk about..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-violet-600 px-8 py-3.5 font-semibold text-white transition-all hover:bg-violet-700 active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
      
      {/* Footer / Copyright bar */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} Minahil Shahzad. All rights reserved.
        </p>
      </div>
    </section>
  );
}
