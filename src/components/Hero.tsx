import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, MessageSquare, Trophy } from 'lucide-react';
import { profile } from '../data/profile';
import { socials } from '../data/socials';
import { useTypingEffect } from '../hooks/useTypingEffect';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const typedTitle = useTypingEffect(profile.titles, 120, 60, 2000);

  // Dynamic particle canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const numParticles = Math.min(60, Math.floor((width * height) / 18000));

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
      });
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height || 650;
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      ctx.strokeStyle = isDark ? 'rgba(99, 102, 241, 0.04)' : 'rgba(59, 130, 246, 0.05)';
      ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(15, 23, 42, 0.08)';

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect near particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementRect = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementRect - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-32 bg-gray-50 dark:bg-[#030712] transition-colors"
    >
      {/* Background visual image with styling fallback */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
      />

      {/* Radial glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 block dark:hidden ambient-glow-light" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 hidden dark:block ambient-glow-dark" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 block dark:hidden ambient-glow-light" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 hidden dark:block ambient-glow-dark" />

      {/* Physics Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6 max-w-3xl mx-auto"
        >
          {/* Tagline */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-200/50 dark:border-blue-500/10 bg-blue-500/5 text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold uppercase tracking-widest mx-auto animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Available for Opportunities
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 dark:from-blue-400 dark:via-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h2>

            {/* Typing dynamic subtitles */}
            <div className="h-10 sm:h-12 md:h-14 flex items-center justify-center">
              <span className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 cursor-blink">
                {typedTitle}
              </span>
            </div>
          </div>

          {/* Summary */}
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-sans font-normal py-2">
            {profile.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <button
              id="hero-hire-btn"
              onClick={() => handleScrollTo('contact')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full font-sans text-xs sm:text-sm font-bold tracking-wide text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 hover:scale-[1.02] shadow-md shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
            >
              Hire Me <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-contact-btn"
              onClick={() => handleScrollTo('contact')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full font-sans text-xs sm:text-sm font-bold tracking-wide hover:scale-[1.02] active:scale-95 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-800 dark:text-white transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" /> Contact Me
            </button>
          </div>

          {/* Social Icons Group */}
          <div className="flex items-center justify-center gap-4 pt-10">
            <a
              id="hero-social-linkedin"
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full border border-gray-200/50 dark:border-white/5 bg-white/70 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 shadow-sm transition-all cursor-pointer"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="hero-social-github"
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full border border-gray-200/50 dark:border-white/5 bg-white/70 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-110 shadow-sm transition-all cursor-pointer"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="hero-social-leetcode"
              href={socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full border border-gray-200/50 dark:border-white/5 bg-white/70 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 hover:scale-110 shadow-sm transition-all cursor-pointer"
              title="LeetCode Profile"
            >
              <Trophy className="w-4 h-4" />
            </a>
            <a
              id="hero-social-email"
              href={socials.email}
              className="p-3.5 rounded-full border border-gray-200/50 dark:border-white/5 bg-white/70 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:scale-110 shadow-sm transition-all cursor-pointer"
              title="Send Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Slide down mouse scroller indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-55 animate-bounce">
        <span className="font-mono text-[9px] uppercase tracking-widest text-gray-500">Scroll Down</span>
        <div className="w-4 h-7 rounded-full border border-gray-400 dark:border-gray-600 flex justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-scrollDown" />
        </div>
      </div>
    </section>
  );
}
