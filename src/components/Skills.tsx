import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles } from 'lucide-react';
import { skills } from '../data/skills';

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState('');

  // Search filtered results
  const filteredSkills = skills.map((category) => {
    const match = category.skills.filter((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...category,
      skills: match,
    };
  }).filter((category) => category.skills.length > 0);

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 bg-white dark:bg-[#090d16] border-y border-gray-100 dark:border-white/5 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Technical & Soft Skills
          </h2>
          <div className="mt-2 w-12 h-1 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 mx-auto rounded-full" />
          <p className="mt-4 font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            My categorized toolkit, technologies, and interpersonal strengths.
          </p>
        </div>

        {/* Live Search Engine Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative rounded-full shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="search"
              id="skill-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full rounded-full border border-gray-200/60 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 py-3 pl-11 pr-4 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:bg-white dark:focus:bg-[#030712] focus:ring-1 focus:ring-blue-500 outline-none transition duration-200"
              placeholder="Search tools, platforms, frameworks..."
            />
            {searchQuery && (
              <button
                id="clear-skill-search"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-xs font-semibold text-gray-400 hover:text-gray-600 dark:hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((cat, idx) => (
                <motion.div
                  key={cat.category}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl p-6 shadow-md hover:border-blue-500/30 dark:hover:border-blue-400/20 hover:shadow-xl hover:shadow-blue-500/5 transition duration-300"
                >
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-violet-500 opacity-80" />
                    {cat.category}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg border border-gray-200/50 dark:border-white/5 bg-white dark:bg-white/5 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:border-blue-500/40 dark:hover:border-blue-400/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12"
              >
                <p className="font-sans text-gray-400 text-sm">
                  No skills match your search query: "{searchQuery}"
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
