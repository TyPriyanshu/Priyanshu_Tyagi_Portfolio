import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Layers, Calendar, CheckCircle, Code2 } from 'lucide-react';
import { researchPaper } from '../data/research';

export default function ResearchPaper() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section
      id="exhibitx"
      className="py-24 sm:py-32 bg-gray-50 dark:bg-[#030712] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            ExhibitX: A Smart Project Exhibition Platform for Academic Institutions
          </h2>

          <div className="mt-3 w-16 h-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 mx-auto" />

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            A comprehensive full-stack platform that streamlines academic project
            exhibitions by enabling project submissions, evaluator assignments,
            judging, analytics, and result management through an intuitive and
            modern web interface.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Card */}
          <div className="lg:col-span-5 flex justify-center">

            <motion.div
              initial={{ opacity: 0, scale: .95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .5 }}
              className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl p-7 w-full max-w-sm"
            >

              <div className="flex justify-between items-center border-b border-gray-200 dark:border-white/10 pb-4">

                <span className="text-xs font-bold tracking-widest text-gray-500">
                  FEATURED PROJECT
                </span>

                <span className="text-xs font-bold text-blue-600">
                  EXHIBITX
                </span>

              </div>

              <div className="mt-6">

                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">

                  <Code2 className="text-blue-600 w-7 h-7"/>

                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white leading-snug">

                  {researchPaper.title}

                </h3>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">

                  Full Stack Academic Platform

                </p>

              </div>

              <div className="mt-7 space-y-2 opacity-60">

                <div className="h-2 rounded-full bg-gray-200 dark:bg-white/10"></div>

                <div className="h-2 rounded-full bg-gray-200 dark:bg-white/10 w-5/6"></div>

                <div className="h-2 rounded-full bg-gray-200 dark:bg-white/10 w-4/5"></div>

              </div>

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="mt-8 w-full py-3 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition flex items-center justify-center gap-2 font-semibold"
              >

                <Layers className="w-4 h-4 text-violet-500"/>

                View Project Highlights

              </button>

            </motion.div>

          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-6">

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
              <Calendar className="w-4 h-4" />
              Developed: {researchPaper.duration}
            </span>

            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
              {researchPaper.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-8">
              {researchPaper.description}
            </p>

            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 space-y-5"
                >
                  <h4 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                    Project Highlights
                  </h4>

                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 text-green-500 shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white">
                        Student Project Management
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Students can register, create teams, submit project
                        details, upload required documents, and monitor the
                        approval status of their submissions through a dedicated
                        dashboard.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 text-green-500 shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white">
                        Faculty Evaluation System
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Faculty members evaluate projects using predefined
                        rubrics, provide detailed feedback, assign scores, and
                        submit evaluations digitally, ensuring a transparent and
                        efficient judging process.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 text-green-500 shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white">
                        Admin Dashboard
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Administrators can create exhibitions, assign evaluators,
                        manage project submissions, publish results, generate
                        reports, and monitor the complete exhibition workflow
                        from a centralized dashboard.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 text-green-500 shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white">
                        Modern Full-Stack Architecture
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Developed using React, TypeScript, Tailwind CSS,
                        Node.js, Express.js, MongoDB, and secure authentication
                        to deliver a responsive, scalable, and user-friendly
                        application.
                      </p>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-400 font-semibold">
                <CheckCircle className="w-5 h-5" />
                Academic Innovation Project
              </div>
            </div>

          </div>
                  </div>
      </div>
    </section>
  );
}