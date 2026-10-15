import { portfolioData, isPlaceholder } from '../data/portfolioData';
import { Cpu, Code, Wrench, Sparkles, ArrowUpRight } from 'lucide-react';
import { LeetCodeIcon } from './SocialIcons';

export const Skills = () => {
  const { skills, personal } = portfolioData;

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-3 mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Specializations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            A solid computational foundation centered on C++, Data Structures & Algorithms, and modern software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Programming Languages */}
          <div className="bg-[#11161f]/80 border border-white/[0.07] rounded-3xl p-7 sm:p-8 space-y-5 flex flex-col justify-between hover:border-white/20 transition-all shadow-sm">
            <div className="space-y-4">
              <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
                <Code size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">Languages</h3>
                <p className="text-xs text-slate-400 mt-1">Core programming paradigms & languages</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.programmingLanguages.map((lang: string) => (
                <span
                  key={lang}
                  className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-200 text-xs sm:text-sm font-medium hover:border-emerald-500/30 transition-colors"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Core Focus */}
          <div className="bg-[#11161f]/80 border border-emerald-500/30 rounded-3xl p-7 sm:p-8 space-y-5 flex flex-col justify-between shadow-lg shadow-emerald-950/20">
            <div className="space-y-4">
              <div className="p-2.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 w-fit">
                <Cpu size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">Core Specialization</h3>
                <p className="text-xs text-slate-400 mt-1">Algorithmic complexity & data structures</p>
              </div>
            </div>
            <div className="space-y-3 pt-2">
              {skills.coreFocus.map((focus: string) => (
                <div
                  key={focus}
                  className="px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs sm:text-sm font-semibold flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{focus}</span>
                </div>
              ))}
              {!isPlaceholder(personal.leetcode) && (
                <a
                  href={personal.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors pt-1 font-medium"
                >
                  <LeetCodeIcon className="w-3.5 h-3.5" />
                  <span>View LeetCode Profile</span>
                  <ArrowUpRight size={12} />
                </a>
              )}
            </div>
          </div>

          {/* Card 3: Developer Tools */}
          <div className="bg-[#11161f]/80 border border-white/[0.07] rounded-3xl p-7 sm:p-8 space-y-5 flex flex-col justify-between hover:border-white/20 transition-all shadow-sm">
            <div className="space-y-4">
              <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
                <Wrench size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">Tools & Workflow</h3>
                <p className="text-xs text-slate-400 mt-1">Development environment and version control</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.tools.map((tool: string) => (
                <span
                  key={tool}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                    isPlaceholder(tool)
                      ? 'bg-white/[0.02] border border-white/[0.05] text-slate-500'
                      : 'bg-white/[0.04] border border-white/[0.08] text-slate-200'
                  }`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Learning & Interests */}
          <div className="bg-[#11161f]/80 border border-white/[0.07] rounded-3xl p-7 sm:p-8 space-y-5 flex flex-col justify-between hover:border-white/20 transition-all shadow-sm">
            <div className="space-y-4">
              <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">Exploration</h3>
                <p className="text-xs text-slate-400 mt-1">Emerging domains and engineering interests</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.learningInterests.map((interest: string) => (
                <span
                  key={interest}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                    isPlaceholder(interest)
                      ? 'bg-white/[0.02] border border-white/[0.05] text-slate-500'
                      : 'bg-white/[0.04] border border-white/[0.08] text-slate-200'
                  }`}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
