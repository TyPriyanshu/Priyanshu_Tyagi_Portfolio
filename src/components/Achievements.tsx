import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { achievements } from '../data/achievements';

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 sm:py-32 bg-white dark:bg-[#090d16] border-y border-gray-100 dark:border-white/5 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Key Achievements
          </h2>
          <div className="mt-2 w-12 h-1 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 mx-auto rounded-full" />
          <p className="mt-4 font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A comprehensive look at my milestones outside the traditional academic syllabus.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((ach) => {
            // Dynamically resolve lucide icons
            const IconComponent = (LucideIcons as any)[ach.icon || 'Award'] || LucideIcons.Award;

            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45 }}
                className="group p-6 rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 hover:border-blue-500/30 dark:hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/5 transition duration-300 text-left flex gap-5 items-start"
              >
                {/* Icon wrapper badge */}
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-400/5 text-blue-600 dark:text-blue-400 border border-transparent dark:border-blue-500/15 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500/10 dark:group-hover:text-blue-400 transition-all shadow-sm">
                  <IconComponent className="w-5 h-5" />
                </div>

                <div className="space-y-1.5 min-w-0">
                  <h3 className="font-display font-bold text-base sm:text-lg text-gray-950 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {ach.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-550 dark:text-gray-400 leading-relaxed font-normal">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
