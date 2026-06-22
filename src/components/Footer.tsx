import { useState, useEffect } from 'react';
import { ChevronUp, Github, Linkedin, Mail, Trophy, Sparkles } from 'lucide-react';
import { socials } from '../data/socials';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer
      id="footer-section"
      className="bg-white dark:bg-[#030712] border-t border-gray-150 dark:border-white/5 py-16 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand/Signature column */}
          <div className="md:col-span-5 space-y-4 text-left">
            <button
              id="footer-logo-btn"
              onClick={scrollToTop}
              className="flex items-center gap-2 font-display font-medium text-lg text-gray-950 dark:text-white group cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent italic font-bold">
                Priyanshu.dev
              </span>
            </button>
            <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
              Developing premium digital interfaces and robust background logic to coordinate software with market trends and user demands.
            </p>
          </div>

          {/* Quick links block */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="font-mono text-[9px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-bold">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Education', id: 'education' },
                { label: 'Skills', id: 'skills' },
                { label: 'Experience', id: 'experience' },
                { label: 'Projects', id: 'projects' },
                { label: 'Certificates', id: 'certificates' },
                { label: 'Achievements', id: 'achievements' },
              ].map((link) => (
                <button
                  key={link.id}
                  id={`footer-nav-${link.id}`}
                  onClick={() => handleScrollTo(link.id)}
                  className="block text-left font-sans text-xs font-semibold text-gray-650 dark:text-gray-400 hover:text-blue-500 transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Icons connector */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="font-mono text-[9px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-bold">Connect Elsewhere</h4>
            <div className="flex items-center gap-3">
              <a
                id="footer-social-linkedin"
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-gray-250 dark:border-white/5 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-blue-500/5 transition-all cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="footer-social-github"
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-gray-250 dark:border-white/5 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all cursor-pointer"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="footer-social-leetcode"
                href={socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-gray-250 dark:border-white/5 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-amber-500 hover:bg-amber-500/5 transition-all cursor-pointer"
              >
                <Trophy className="w-4 h-4" />
              </a>
              <a
                id="footer-social-email"
                href={socials.email}
                className="p-2 rounded-lg border border-gray-250 dark:border-white/5 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-red-500 hover:bg-red-500/5 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright notice row */}
        <div className="border-t border-gray-150 dark:border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] sm:text-xs text-gray-400 dark:text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Priyanshu Tyagi. All rights reserved.
          </p>
          <p className="font-sans text-[11px] sm:text-xs text-gray-400 dark:text-gray-500 text-center sm:text-right">
            Crafted with React, Vite, Tailwind CSS, & Motion
          </p>
        </div>
      </div>

      {/* Back To Top Floating Button */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/20 active:scale-95 hover:-translate-y-1 transition duration-300 z-50 cursor-pointer flex items-center justify-center border-none"
          title="Back to Top"
        >
          <ChevronUp className="w-5 h-5 animate-pulse" />
        </button>
      )}
    </footer>
  );
}
