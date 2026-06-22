import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2, Star } from 'lucide-react';
import { experience } from '../data/experience';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 bg-gray-50 dark:bg-[#030712] transition-colors relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Professional Experience
          </h2>
          <div className="mt-2 w-12 h-1 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 mx-auto rounded-full" />
          <p className="mt-4 font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Practical intern positions and virtual simulations in frontend and data analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Company Navigation list - Left bar */}
          <div className="md:col-span-4 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible pb-3 md:pb-0 gap-1 md:border-l border-gray-200 dark:border-white/5 scrollbar-none">
            {experience.map((exp, idx) => (
              <button
                key={exp.id}
                id={`experience-tab-${idx}`}
                onClick={() => setActiveTab(idx)}
                className={`flex-none md:w-full text-left px-4 py-3 rounded-xl md:rounded-l-none md:rounded-r-xl text-xs sm:text-sm font-semibold transition-all relative whitespace-nowrap md:whitespace-normal cursor-pointer ${
                  activeTab === idx
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-500/5'
                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                }`}
              >
                {/* Active sidebar line for desktop */}
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeExperienceIndicator"
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-600 dark:bg-blue-400 hidden md:block"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <div className="font-display font-bold">{exp.company}</div>
                <div className="text-[10px] text-gray-400 font-medium md:mt-0.5">{exp.role}</div>
              </button>
            ))}
          </div>

          {/* Details segment - Right block */}
          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="p-6 rounded-2xl border border-gray-100 dark:border-white/5 bg-white dark:bg-white/5 shadow-xl text-left"
              >
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-white/5 pb-4 mb-5">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-extrabold text-gray-950 dark:text-white flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-blue-500" />
                      {experience[activeTab].role}
                    </h3>
                    <p className="font-sans text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {experience[activeTab].company}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/5 dark:bg-blue-400/5 border border-blue-500/10 dark:border-blue-400/10 text-gray-600 dark:text-gray-400 font-mono text-xs font-semibold self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{experience[activeTab].duration}</span>
                  </div>
                </div>

                {/* Bullets List */}
                <ul className="space-y-3.5 mb-6">
                  {experience[activeTab].description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-gray-650 dark:text-gray-300 leading-relaxed font-sans">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Sub-skills chips if present */}
                {experience[activeTab].skills && (
                  <div className="border-t border-gray-100 dark:border-white/5 pt-5">
                    <h4 className="font-mono text-[9px] uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3 flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500" />
                      Core Exposure & Tools
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {experience[activeTab].skills?.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-white/5 text-[11px] font-semibold text-gray-650 dark:text-gray-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
