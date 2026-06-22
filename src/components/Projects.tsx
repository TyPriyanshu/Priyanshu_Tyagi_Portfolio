import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, HelpCircle, Layers, FolderGit2, X, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectItem } from '../types/portfolio';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 bg-white dark:bg-[#090d16] border-y border-gray-100 dark:border-white/5 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="mt-2 w-12 h-1 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 mx-auto rounded-full" />
          <p className="mt-4 font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A production-ready selection of MERN applications, Python predictive models, and algorithms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col h-full rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 overflow-hidden hover:border-blue-500/30 dark:hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/5 transition duration-300"
            >
              {/* Project Image Panel / Custom Graphical Mock up */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-850 overflow-hidden flex items-center justify-center border-b border-gray-150 dark:border-white/5">
                <img
                  src={`/projects/${project.image}`}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Modern placeholder with styled initials & category pattern if image doesn't exist yet
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const placeholder = parent.querySelector('.project-media-fallback');
                      if (placeholder) {
                        placeholder.classList.remove('hidden');
                        placeholder.classList.add('flex');
                      }
                    }
                  }}
                />

                {/* Styled geometric developer placeholder */}
                <div className="project-media-fallback hidden absolute inset-0 bg-gradient-to-tr from-[#0b0f19] via-[#111827] to-[#1e1b4b] flex-col justify-between p-5">
                  <div className="flex items-center justify-between">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                    <FolderGit2 className="w-5 h-5 text-gray-500 opacity-60" />
                  </div>
                  <div className="text-left space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-blue-400 font-semibold">
                      {project.tech[0]} // {project.tech[1] || 'Web'}
                    </span>
                    <h4 className="font-display text-base font-extrabold text-white truncate max-w-xs">
                      {project.title}
                    </h4>
                  </div>
                </div>

                {/* Hover overlay details button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                  <button
                    id={`project-quick-view-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 rounded-full bg-white dark:bg-[#030712] border border-gray-200 dark:border-white/10 text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1.5 shadow-lg shadow-black/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5 text-blue-500" />
                    Quick Details
                  </button>
                </div>
              </div>

              {/* Card Contents */}
              <div className="p-6 flex flex-col flex-grow text-left">
                {/* Tech chips */}
                <div className="flex flex-wrap gap-1 mb-3.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md border border-gray-200/50 dark:border-white/5 bg-gray-100 dark:bg-white/5 text-[10px] font-semibold text-gray-500 dark:text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded-md border border-gray-200/50 dark:border-white/5 bg-gray-100 dark:bg-white/5 text-[10px] font-semibold text-gray-400">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Header */}
                <div className="space-y-1.5 mb-3">
                  <h3 className="font-display font-extrabold text-lg text-gray-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.duration && (
                    <span className="block font-mono text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest font-semibold">
                      {project.duration}
                    </span>
                  )}
                </div>

                {/* Paragraph */}
                <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* CTA Action Bar at base */}
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between gap-2.5">
                  {/* Buttons */}
                  <div className="flex items-center gap-1.5">
                    {project.githubLink && (
                      <a
                        id={`project-github-link-${project.id}`}
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg border border-gray-200/50 dark:border-white/5 bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
                        title="View Codebase"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.liveLink && (
                      <a
                        id={`project-live-link-${project.id}`}
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-500/5 transition-colors cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Demo
                      </a>
                    )}
                  </div>

                  {/* Actions Dialog trigger */}
                  <button
                    id={`project-link-details-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 text-[11px] font-bold text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Overlay Dialog Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Dimmed static backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
              />

              {/* Dialogue Main Wrapper Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="relative bg-white dark:bg-[#0c101b] border border-gray-100 dark:border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10"
              >
                {/* Header graphics banner */}
                <div className="relative aspect-video bg-gradient-to-tr from-[#020617] via-[#0f172a] to-[#312e81] flex items-center justify-center border-b border-gray-200/50 dark:border-white/10">
                  <img
                    src={`/projects/${selectedProject.image}`}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallback = parent.querySelector('.project-modal-fallback');
                        if (fallback) fallback.classList.remove('hidden');
                      }
                    }}
                  />
                  {/* Fallback pattern for modal */}
                  <div className="project-modal-fallback hidden absolute inset-0 bg-gradient-to-tr from-[#070a13] via-[#0c111d] to-[#1e1b4b] flex flex-col justify-center p-12 text-center text-white">
                    <Sparkles className="w-12 h-12 text-blue-500 mx-auto mb-4 animate-bounce" />
                    <h3 className="font-display text-2xl font-extrabold tracking-tight">
                      {selectedProject.title}
                    </h3>
                  </div>

                  {/* Absolute X Exit Button */}
                  <button
                    id="modal-close-btn"
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-black/85 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Modal Body Contents */}
                <div className="p-6 sm:p-8 text-left space-y-6">
                  {/* Tech segment */}
                  <div className="space-y-2">
                    <span className="block font-mono text-[9px] uppercase tracking-wider text-gray-400 dark:text-gray-500">
                      Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.map((chip) => (
                        <span
                          key={chip}
                          className="px-3 py-1 rounded-md border border-gray-200/40 dark:border-white/5 bg-gray-50 dark:bg-white/5 text-[11px] font-semibold text-gray-700 dark:text-gray-300"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Summary descriptor */}
                  <div className="space-y-2">
                    <h2 className="font-display text-xl sm:text-2xl font-extrabold text-gray-950 dark:text-white">
                      {selectedProject.title}
                    </h2>
                    {selectedProject.duration && (
                      <span className="block font-mono text-[10px] text-blue-600 dark:text-blue-400 uppercase tracking-widest font-semibold">
                        Developed: {selectedProject.duration}
                      </span>
                    )}
                    <p className="font-sans text-sm text-gray-600 dark:text-gray-350 leading-relaxed pt-2">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Footer primary Links */}
                  <div className="border-t border-gray-150 dark:border-white/5 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {selectedProject.githubLink && (
                        <a
                          id={`modal-project-github-${selectedProject.id}`}
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 text-xs font-bold text-gray-950 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
                        >
                          <Github className="w-4 h-4" /> View Source Code
                        </a>

                      )}

                      {selectedProject.liveLink && (
                        <a
                          id={`modal-project-live-${selectedProject.id}`}
                          href={selectedProject.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-xs font-bold text-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4" /> Live Web Demo
                        </a>
                      )}
                    </div>

                    <button
                      id="close-modal-footer-btn"
                      onClick={() => setSelectedProject(null)}
                      className="px-4 py-2 rounded-full text-xs font-bold text-gray-500 hover:text-gray-800 dark:hover:text-white"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
