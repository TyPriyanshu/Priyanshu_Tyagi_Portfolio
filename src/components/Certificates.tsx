import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Eye, Calendar, X, Sparkles, ChevronRight } from 'lucide-react';
import { certificates } from '../data/certificates';
import { CertificateItem } from '../types/portfolio';

export default function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState<CertificateItem | null>(null);

  return (
    <section
      id="certificates"
      className="py-24 sm:py-32 bg-gray-50 dark:bg-[#030712] transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Professional Certificates & Badges
          </h2>
          <div className="mt-2 w-12 h-1 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 mx-auto rounded-full" />
          <p className="mt-4 font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Technical credentials verified from AWS Academy, LinkedIn Learning, and Infosys Springboard.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveCertificate(cert)}
              className="group bg-white dark:bg-white/5 border border-gray-150 dark:border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 dark:hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/5 transition cursor-pointer flex flex-col h-full"
            >
              {/* Image Box / Placeholder wrapper for missing certificate files */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center border-b border-gray-100 dark:border-white/5 overflow-hidden">
                <img
                  src={`/certificates/${cert.image}`}
                  alt={cert.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = parent.querySelector('.cert-media-fallback');
                      if (fallback) {
                        fallback.classList.remove('hidden');
                        fallback.classList.add('flex');
                      }
                    }
                  }}
                />

                {/* Simulated visual cert layout */}
                <div className="cert-media-fallback hidden absolute inset-0 bg-gradient-to-tr from-[#020617] via-[#090d16] to-[#1e1b4b] flex flex-col items-center justify-center p-6 text-center">
                  <div className="relative mb-3">
                    <div className="absolute -inset-1 bg-blue-500 rounded-full blur-sm opacity-50 animate-pulse" />
                    <div className="relative w-12 h-12 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-400">
                      <Award className="w-6 h-6" />
                    </div>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-blue-400 font-semibold mb-0.5">
                    Verified Credential
                  </span>
                  <span className="font-display text-xs font-bold text-gray-300 line-clamp-1 truncate max-w-[200px]">
                    {cert.provider}
                  </span>
                </div>

                {/* Hover Eye indicator */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                  <span className="px-4 py-2 rounded-full bg-white dark:bg-[#030712] border border-gray-200 dark:border-white/15 text-xs font-extrabold text-gray-900 dark:text-white flex items-center gap-1.5 shadow-md">
                    <Eye className="w-4.5 h-4.5 text-blue-500" />
                    Preview Certificate
                  </span>
                </div>
              </div>

              {/* Text Card content */}
              <div className="p-5 text-left flex flex-col flex-grow">
                <span className="block font-mono text-[9px] uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-1">
                  {cert.provider}
                </span>
                <h3 className="font-display text-base font-bold text-gray-900 dark:text-white line-clamp-2 leading-snug flex-grow">
                  {cert.title}
                </h3>
                
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/5 pt-4 mt-4">
                  <div className="flex items-center gap-1 font-mono text-[10px] text-gray-400 dark:text-gray-500 tracking-wide">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cert.duration}</span>
                  </div>
                  
                  <div className="flex items-center text-xs font-bold text-blue-600 dark:text-blue-400">
                    Verify <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate lightbox popup modal overlay */}
        <AnimatePresence>
          {activeCertificate && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Click backdrop to seal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveCertificate(null)}
                className="absolute inset-0 bg-black/75 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ type: 'spring', duration: 0.45 }}
                className="relative bg-[#020617] border border-white/10 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl z-10"
              >
                {/* Visual Header image render */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-slate-950 flex items-center justify-center border-b border-white/5">
                  <img
                    src={`/certificates/${activeCertificate.image}`}
                    alt={activeCertificate.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain p-2"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallback = parent.querySelector('.lightbox-media-fallback');
                        if (fallback) fallback.classList.remove('hidden');
                      }
                    }}
                  />

                  {/* High fidelity fallback display */}
                  <div className="lightbox-media-fallback hidden absolute inset-0 bg-gradient-to-tr from-[#02050c] via-[#090d16] to-[#111827] flex flex-col items-center justify-center p-8 text-center text-white">
                    <div className="relative w-20 h-20 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 shadow-2xl animate-spin-slow">
                      <Award className="w-10 h-10" />
                    </div>
                    <h3 className="font-display text-2xl font-extrabold tracking-tight mb-2">
                      {activeCertificate.title}
                    </h3>
                    <p className="font-mono text-xs text-blue-400 font-semibold tracking-wider uppercase mb-8">
                      Verified Credentials // {activeCertificate.provider}
                    </p>
                    
                    <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-8" />
                    <p className="font-sans text-xs text-gray-400 max-w-sm leading-relaxed">
                      This formal certification acknowledges deep domain competency in software processes and tools.
                    </p>
                  </div>

                  {/* Absolute X Exit Button */}
                  <button
                    id="lightbox-close-btn"
                    onClick={() => setActiveCertificate(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 active:scale-95 transition-all cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Subtext information panel */}
                <div className="p-6 text-left space-y-2 bg-[#050812]">
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-blue-400 font-semibold">
                    Credential Subject & Details
                  </span>
                  <div className="flex items-center justify-between gap-2.5">
                    <div>
                      <h4 className="font-display font-bold text-lg text-white">
                        {activeCertificate.title}
                      </h4>
                      <p className="font-sans text-xs text-gray-400">
                        Granted by {activeCertificate.provider} // Registered: {activeCertificate.duration}
                      </p>
                    </div>

                    <button
                      id="lightbox-dismiss-footer"
                      onClick={() => setActiveCertificate(null)}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-xs font-bold text-gray-400 hover:text-white"
                    >
                      Close View
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
