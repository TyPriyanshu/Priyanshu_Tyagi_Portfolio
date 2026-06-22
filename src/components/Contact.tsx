import { Mail, Phone, MapPin, Github, Linkedin, Trophy, Sparkles } from 'lucide-react';
import { contact } from '../data/contact';
import { socials } from '../data/socials';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-gray-50 dark:bg-[#030712] transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="mt-2 w-12 h-1 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 mx-auto rounded-full" />
          <p className="mt-4 font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Let's discuss internship opportunities, software engineering roles, or system design collaborations.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Details Card */}
          <div className="p-8 rounded-2xl border border-gray-150 dark:border-white/5 bg-white dark:bg-white/5 shadow-2xl text-left space-y-6">
            <h3 className="font-display text-xl font-bold text-gray-950 dark:text-white border-b border-gray-100 dark:border-white/5 pb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-500" />
              Contact Details
            </h3>
            
            {/* Phone item */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-400/5 text-blue-600 dark:text-blue-400 border border-transparent dark:border-blue-500/10 shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-mono text-[9px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-semibold mb-0.5">
                  Call Direct
                </span>
                <a href={`tel:${contact.phone}`} className="block font-sans text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors">
                  {contact.phone}
                </a>
              </div>
            </div>

            {/* Email item */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-400/5 text-indigo-500 dark:text-indigo-400 border border-transparent dark:border-indigo-500/10 shrink-0 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-mono text-[9px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-semibold mb-0.5">
                  Email Address
                </span>
                <a href={`mailto:${contact.email}`} className="block font-sans text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors break-all">
                  {contact.email}
                </a>
              </div>
            </div>

            {/* Area mapPin item */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-red-100 dark:bg-red-400/5 text-red-500 dark:text-red-400 border border-transparent dark:border-red-500/10 shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-mono text-[9px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-semibold mb-0.5">
                  Office / Location
                </span>
                <span className="block font-sans text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200">
                  {contact.location}
                </span>
              </div>
            </div>
          </div>

          {/* Quick social channels */}
          <div className="space-y-3 pt-4 text-center">
            <h4 className="font-mono text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-bold">Follow On Social Networks</h4>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                id="contact-linkedin"
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-blue-500" /> LinkedIn
              </a>
              <a
                id="contact-github"
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Github className="w-4 h-4 text-gray-500" /> GitHub
              </a>
              <a
                id="contact-leetcode"
                href={socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-amber-500 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Trophy className="w-4 h-4 text-amber-500 animate-pulse" /> LeetCode
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
