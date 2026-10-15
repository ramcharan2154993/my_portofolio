import { portfolioData, isPlaceholder } from '../data/portfolioData';
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LeetCodeIcon, LinkedinIcon } from './SocialIcons';

export const Hero = () => {
  const { personal, education } = portfolioData;
  const primaryEducation = education[0];

  const hasPhoto = Boolean(personal.photo && personal.photo.trim() && !isPlaceholder(personal.photo));

  // Derive initials for avatar fallback if photo is missing or empty
  const getInitials = (name?: string): string => {
    if (!name || isPlaceholder(name)) return 'VR';
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return 'VR';
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const initials = getInitials(personal.name);

  return (
    <section id="hero" className="relative pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Name, Introduction, Buttons (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
            {/* Subtitle / Headline Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personal.headline}</span>
            </div>

            {/* Large Clean Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              {personal.name}
            </h1>

            {/* Subtle Accent Line inspired by reference */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent rounded-full" />

            {/* Short, polished introduction */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
              I am a Computer Science student at {primaryEducation?.institution || 'Mohan Babu University'} with a strong passion for problem-solving, algorithms, and software engineering. Grounded in C++ and core programming principles, I aspire to build high-impact software systems and explore emerging AI technologies.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-slate-900 border border-slate-700/80 hover:border-emerald-400/80 text-white font-medium text-sm transition-all shadow-lg shadow-black/40 hover:shadow-emerald-500/10 group"
              >
                <span>Contact me</span>
                <ArrowRight size={15} className="text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#achievements"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-slate-200 text-sm font-medium transition-all"
              >
                <span>Explore My Work</span>
                <ArrowUpRight size={15} className="text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Portrait & Floating Stat Callouts (lg:col-span-5) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative order-1 lg:order-2 lg:pr-4">
            <div className="relative hero-photo-entrance">
              {/* Subtle background glow */}
              <div 
                className="absolute -inset-6 rounded-full bg-emerald-500/[0.18] blur-3xl hero-photo-aura pointer-events-none"
                aria-hidden="true" 
              />

              {/* Floating Stat Block 1 (Top-Right, placed high and clear of face) */}
              <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-6 md:-right-8 z-20 bg-[#121922]/95 border border-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-2xl shadow-xl shadow-black/40 pointer-events-none">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Academic CGPA</p>
                <p className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-none mt-1">
                  9.89 <span className="text-xs font-medium text-emerald-400">/ 10</span>
                </p>
              </div>

              {/* Floating Stat Block 2 (Bottom-Left, placed near chest/collar, completely clear of face) */}
              <div className="absolute bottom-8 -left-2 sm:bottom-12 sm:-left-8 md:-left-10 z-20 bg-[#121922]/95 border border-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-2xl shadow-xl shadow-black/40 pointer-events-none">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Java Distinction</p>
                <p className="text-base sm:text-xl font-bold text-white tracking-tight leading-none mt-1">
                  10/10 <span className="text-xs font-medium text-emerald-400">Top 1%</span>
                </p>
              </div>

              {/* Floating Stat Block 3 (Bottom-Right, placed low outside the circle) */}
              <div className="absolute -bottom-3 right-4 sm:-bottom-4 sm:right-6 md:right-8 z-20 bg-[#121922]/95 border border-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-2xl shadow-xl shadow-black/40 pointer-events-none">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Core Focus</p>
                <p className="text-xs sm:text-base font-bold text-emerald-300 tracking-tight leading-none mt-1">
                  DSA in C++
                </p>
              </div>

              {/* Portrait circular frame with emerald ring and hover lift - Enlarged and prominently framed */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[24rem] lg:h-[24rem] rounded-full p-1.5 sm:p-2 bg-gradient-to-b from-emerald-500/35 via-white/5 to-slate-900 hero-photo-card hero-photo-glow shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0e141b] flex items-center justify-center">
                  {hasPhoto ? (
                    <img
                      src={personal.photo || "/profile.jpg"}
                      alt={personal.photoAlt || `Photo of ${personal.name}`}
                      width={400}
                      height={400}
                      fetchPriority="high"
                      {...({ fetchpriority: 'high' } as Record<string, string>)}
                      style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span
                      className="font-bold text-4xl sm:text-5xl text-emerald-400 select-none tracking-wider"
                      aria-label={personal.name}
                    >
                      {initials}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Row: Platform links row directly inspired by Dribbble/Behance/Fiverr/LinkedIn row in reference */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
            {/* GitHub */}
            {!isPlaceholder(personal.github) && (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#111720]/80 hover:bg-[#161f2b] border border-white/[0.08] hover:border-emerald-500/40 text-sm font-medium text-slate-200 hover:text-white transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
                <ArrowUpRight size={13} className="text-slate-500" />
              </a>
            )}

            {/* LeetCode */}
            {!isPlaceholder(personal.leetcode) && (
              <a
                href={personal.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#111720]/80 hover:bg-[#161f2b] border border-white/[0.08] hover:border-amber-500/40 text-sm font-medium text-slate-200 hover:text-white transition-all shadow-sm"
              >
                <LeetCodeIcon className="w-4 h-4 text-amber-400" />
                <span>LeetCode</span>
                <ArrowUpRight size={13} className="text-slate-500" />
              </a>
            )}

            {/* LinkedIn */}
            {!isPlaceholder(personal.linkedin) ? (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#111720]/80 hover:bg-[#161f2b] border border-white/[0.08] hover:border-sky-500/40 text-sm font-medium text-slate-200 hover:text-white transition-all shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} className="text-slate-500" />
              </a>
            ) : (
              <span
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#111720]/40 border border-white/[0.05] text-xs text-slate-500 cursor-not-allowed select-none"
                title="LinkedIn profile not configured"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-slate-600" />
                <span>LinkedIn pending</span>
              </span>
            )}

            {/* Email */}
            {!isPlaceholder(personal.email) && (
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#111720]/80 hover:bg-[#161f2b] border border-white/[0.08] hover:border-emerald-500/40 text-sm font-medium text-slate-200 hover:text-white transition-all shadow-sm"
              >
                <Mail size={16} className="text-emerald-400" />
                <span>Email</span>
                <ArrowUpRight size={13} className="text-slate-500" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
