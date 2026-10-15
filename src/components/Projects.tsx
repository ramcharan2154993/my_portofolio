import { portfolioData, isPlaceholder } from '../data/portfolioData';
import { Clock, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const Projects = () => {
  const { personal } = portfolioData;

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-3 mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Work & Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Software projects and open-source contributions currently in development.
          </p>
        </div>

        {/* Featured Projects Showcase Card */}
        <div className="max-w-2xl bg-[#11161f]/80 border border-white/[0.07] rounded-3xl p-8 sm:p-10 space-y-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Sparkles size={20} />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-300">
              <Clock size={13} className="text-emerald-400 animate-pulse" />
              <span>In Active Development</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Projects Coming Soon
            </h3>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              I am currently engineering projects focused on Data Structures & Algorithms implementations, computational utilities, and software tools. Repositories will be published as they reach milestone readiness.
            </p>
          </div>

          {/* Action Link to GitHub profile */}
          {!isPlaceholder(personal.github) && (
            <div className="pt-4 border-t border-white/[0.06]">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-emerald-500/40 text-xs sm:text-sm font-medium text-slate-200 hover:text-white transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>Follow upcoming projects on GitHub</span>
                <ArrowUpRight size={14} className="text-slate-400" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
