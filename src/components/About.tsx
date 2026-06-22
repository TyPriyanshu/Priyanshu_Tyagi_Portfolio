import { motion } from 'motion/react';
import { GraduationCap, Award, MapPin, Mail, Phone, Languages, Compass, Briefcase } from 'lucide-react';
import { profile } from '../data/profile';

export default function About() {
  const detailItems = [
    { icon: GraduationCap, label: "Graduation", value: profile.graduation, color: "text-blue-500" },
    { icon: Award, label: "Current CGPA / Score", value: profile.cgpa, color: "text-amber-500" },
    { icon: MapPin, label: "Location", value: profile.location, color: "text-red-500" },
    { icon: Mail, label: "Email Address", value: profile.email, color: "text-indigo-500", isLink: true, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone Number", value: profile.phone, color: "text-green-500" },
    { icon: Languages, label: "Languages", value: profile.languages.join(", "), color: "text-violet-500" },
    { icon: Compass, label: "Key Interests", value: profile.interests.join(", "), color: "text-pink-500" },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-white dark:bg-[#090d16] border-y border-gray-100 dark:border-white/5 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="mt-2 w-12 h-1 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 mx-auto rounded-full" />
          <p className="mt-4 font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A software engineer translating complex business requirements into elegant binary systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Profile Picture Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-xs sm:max-w-sm w-full">
              {/* Outer decorative card frame glows */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 to-violet-600 dark:from-blue-500 dark:to-violet-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-700" />
              
              {/* Image Frame Container */}
              <div className="relative aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 dark:bg-white/5 border border-white/15 dark:border-white/10 shadow-2xl">
                {/* Image tag with referrerPolicy */}
                <img
                  src="/images/profile.jpeg"
                  alt={profile.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Modern placeholder replacement when image is missing:
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const placeholder = parent.querySelector('.profile-fallback-avatar');
                      if (placeholder) {
                        placeholder.classList.remove('hidden');
                        placeholder.classList.add('flex');
                      }
                    }
                  }}
                />

                {/* Highly premium visual avatar mockup fallback if image is missing */}
                <div className="profile-fallback-avatar hidden absolute inset-0 bg-gradient-to-tr from-[#1e1b4b] via-[#090d16] to-[#0f172a] flex-col items-center justify-center p-8 text-center">
                  <div className="relative mb-6">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full blur-md opacity-50 animate-pulse" />
                    <div className="relative w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center border-2 border-white/20 shadow-xl">
                      <span className="font-display text-4xl font-extrabold text-white tracking-widest">PT</span>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">{profile.name}</h3>
                  <p className="font-mono text-xs text-blue-400 font-semibold mb-4">Software Developer</p>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] font-medium text-gray-400">
                    <Briefcase className="w-3.5 h-3.5 text-blue-500" /> KIET Group of Institutions
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Details Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Bio Card */}
            <div className="p-6 rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 backdrop-blur-sm">
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Overview & Vision
              </h3>
              <p className="font-sans text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                As an Information Technology undergraduate at **KIET Group of Institutions**, I merge academic excellence with modular software architecture knowledge. My passion lies at the intersection of web engineering and high-performance algorithms.
              </p>
              <p className="font-sans text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mt-4">
                I thrive on translating complex requirements into simple, responsive, and performance-optimized digital products. In my internships and research endeavors, I always strive to implement clean coding principles and modular state management.
              </p>
            </div>

            {/* Structured details list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {detailItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-gray-100 dark:border-white/5 bg-gray-50/30 dark:bg-white/5 hover:border-gray-200 dark:hover:border-white/10 hover:bg-gray-100/30 dark:hover:bg-white/10 transition duration-300 flex items-start gap-3.5"
                  >
                    <div className={`p-2 rounded-lg bg-gray-100 dark:bg-white/5 ${item.color} mt-0.5`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500">
                        {item.label}
                      </span>
                      {item.isLink && item.href ? (
                        <a
                          href={item.href}
                          className="block font-sans text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline truncate"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="block font-sans text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 break-words">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
