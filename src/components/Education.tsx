import { motion } from 'motion/react';
import { Calendar, GraduationCap, Award, BookOpen } from 'lucide-react';
import { education } from '../data/education';

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 sm:py-32 bg-gray-50 dark:bg-[#030712] transition-colors relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Education Timeline
          </h2>
          <div className="mt-2 w-12 h-1 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 mx-auto rounded-full" />
          <p className="mt-4 font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            My academic journey outlining grades, milestones, and institutions.
          </p>
        </div>

        {/* Timeline Path Structure */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical core spine line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-600/40 via-violet-600/30 to-indigo-600/5 -translate-x-1/2" />

          {/* Education items map */}
          <div className="space-y-12 sm:space-y-16">
            {education.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={item.id} className="relative flex flex-col sm:flex-row items-stretch">
                  {/* Spine Node point */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-[#030712] border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center shadow-md animate-pulse">
                      <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>

                  {/* Spacer or Left Card depending on alignment */}
                  <div className={`w-full sm:w-1/2 ${isEven ? 'pl-12 sm:pl-0 sm:pr-12' : 'pl-12 sm:pl-12 order-1 sm:order-2'}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                        className="p-6 rounded-2xl border border-gray-100 dark:border-white/5 bg-white dark:bg-white/5 shadow-xl hover:border-gray-200 dark:hover:border-white/10 transition-all text-left group"
                      >
                        <div className="flex items-center gap-2 font-mono text-xs text-blue-600 dark:text-blue-400 mb-2">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.duration}</span>
                        </div>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.institution}
                        </h3>
                        <p className="font-sans text-sm font-medium text-gray-700 dark:text-gray-300 mt-1">
                          {item.degree}
                        </p>
                        
                        <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-mono text-xs font-bold shadow-sm">
                          <Award className="w-3.5 h-3.5" />
                          <span>Score: {item.score}</span>
                        </div>

                        {item.details && (
                          <p className="mt-4 font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-white/5 pt-3">
                            {item.details}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </div>

                  {/* Spacer or Right Card depending on alignment */}
                  <div className={`w-full sm:w-1/2 ${!isEven ? 'pl-12 sm:pl-12' : 'pl-12 sm:pl-0 sm:pr-12 order-2 sm:order-1 hidden sm:block pointer-events-none'}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                        className="p-6 rounded-2xl border border-gray-100 dark:border-white/5 bg-white dark:bg-white/5 shadow-xl hover:border-gray-200 dark:hover:border-white/10 transition-all text-left group"
                      >
                        <div className="flex items-center gap-2 font-mono text-xs text-blue-600 dark:text-blue-400 mb-2">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.duration}</span>
                        </div>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.institution}
                        </h3>
                        <p className="font-sans text-sm font-medium text-gray-700 dark:text-gray-300 mt-1">
                          {item.degree}
                        </p>
                        
                        <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-mono text-xs font-bold shadow-sm">
                          <Award className="w-3.5 h-3.5" />
                          <span>Score: {item.score}</span>
                        </div>

                        {item.details && (
                          <p className="mt-4 font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-white/5 pt-3">
                            {item.details}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
