import { portfolioData, isPlaceholder } from '../data/portfolioData';
import { Cpu, Code, Wrench, Sparkles, ArrowUpRight, Terminal, Compass } from 'lucide-react';
import { LeetCodeIcon } from './SocialIcons';

// Language metadata to enhance presentation
const languageMeta: Record<string, { role: string; tag?: string }> = {
  'C++': { role: 'Primary Language for DSA & Systems', tag: 'Core' },
  'Java': { role: '10/10 Distinction • OOP & Enterprise', tag: 'Distinction' },
  'Python': { role: 'Scripting, Automation & AI/ML', tag: 'Versatile' },
  'C': { role: 'Procedural Architecture & Memory', tag: 'Foundations' },
};

export const Skills = () => {
  const { skills, personal } = portfolioData;

  // Helper to parse tool categories formatted as "Category: Item1, Item2"
  const parseTool = (raw: string) => {
    if (isPlaceholder(raw)) return { category: '', items: [raw] };
    const colonIndex = raw.indexOf(':');
    if (colonIndex !== -1) {
      const category = raw.slice(0, colonIndex).trim();
      const items = raw
        .slice(colonIndex + 1)
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
      return { category, items };
    }
    return { category: '', items: [raw] };
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-3 mb-12 sm:mb-14 text-left">
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

        {/* Bento Grid Layout */}
        <div className="space-y-6">
          {/* Top Row: Core Specialization & Programming Languages */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Card 1: Core Specialization (Col-span 6) */}
            <div className="lg:col-span-6 bg-[#11161f]/80 border border-emerald-500/30 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-lg shadow-emerald-950/20 hover:border-emerald-500/50 transition-all">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 w-fit">
                    <Cpu size={22} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Algorithmic Core
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Core Specialization
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Algorithmic problem-solving, asymptotic analysis, and optimized implementations in C++.
                  </p>
                </div>

                {/* Focus Badges */}
                <div className="space-y-2.5 pt-1">
                  {skills.coreFocus.map((focus: string) => (
                    <div
                      key={focus}
                      className="px-4 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-200 text-sm font-semibold flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <Terminal size={16} className="text-emerald-400" />
                        <span>{focus}</span>
                      </div>
                      <span className="text-[11px] font-medium text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-md border border-emerald-400/20">
                        Primary Focus
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* LeetCode CTA */}
              <div className="pt-6 border-t border-white/[0.06] mt-6 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Continuous competitive problem solving
                </span>
                {!isPlaceholder(personal.leetcode) && (
                  <a
                    href={personal.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-amber-500/40 text-xs text-amber-400 hover:text-amber-300 font-medium transition-all"
                  >
                    <LeetCodeIcon className="w-3.5 h-3.5" />
                    <span>LeetCode Profile</span>
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </div>

            {/* Card 2: Programming Languages (Col-span 6) */}
            <div className="lg:col-span-6 bg-[#11161f]/80 border border-white/[0.07] rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all shadow-sm">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
                    <Code size={22} />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.06]">
                    4 Languages
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Programming Languages
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Foundational and modern languages for competitive programming, OOP, and scripting.
                  </p>
                </div>

                {/* Languages List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {skills.programmingLanguages.map((lang: string) => {
                    const meta = languageMeta[lang];
                    return (
                      <div
                        key={lang}
                        className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-base font-bold text-white tracking-tight">
                            {lang}
                          </span>
                          {meta?.tag && (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              {meta.tag}
                            </span>
                          )}
                        </div>
                        {meta?.role && (
                          <p className="text-[11px] text-slate-400 leading-snug">
                            {meta.role}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.06] mt-6 flex items-center justify-between text-xs text-slate-400">
                <span>Core Paradigms</span>
                <span className="text-slate-300 font-medium">Procedural, OOP, Scripting</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Tools & Workflow (Col-span 7) + Exploration (Col-span 5) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Card 3: Developer Tools & Workflow (Col-span 7) */}
            <div className="lg:col-span-7 bg-[#11161f]/80 border border-white/[0.07] rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
                    <Wrench size={22} />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.06]">
                    Toolbox & Stack
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Tools & Development Workflow
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Modern developer environments, version control systems, and engineering workflows.
                  </p>
                </div>

                {/* Categorized Tools Grid */}
                <div className="space-y-4 pt-1">
                  {skills.tools.map((rawTool: string) => {
                    const { category, items } = parseTool(rawTool);
                    return (
                      <div key={rawTool} className="space-y-2">
                        {category && (
                          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-emerald-400/80" />
                            <span>{category}</span>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {items.map((item: string) => (
                            <span
                              key={item}
                              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                                isPlaceholder(item)
                                  ? 'bg-white/[0.02] border border-white/[0.05] text-slate-500'
                                  : 'bg-white/[0.03] border border-white/[0.07] hover:border-emerald-500/30 text-slate-200 hover:text-white hover:bg-white/[0.06]'
                              }`}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Card 4: Exploration & Future Horizons (Col-span 5) */}
            <div className="lg:col-span-5 bg-[#11161f]/80 border border-white/[0.07] rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
                    <Sparkles size={22} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Compass size={12} />
                    Future Horizons
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Emerging Interests & AI/ML
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Expanding beyond foundational computing into intelligent systems and modern architectures.
                  </p>
                </div>

                {/* Narrative Statement */}
                <div className="space-y-4 pt-1">
                  {skills.learningInterests.map((interest: string) => (
                    <div
                      key={interest}
                      className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] relative"
                    >
                      <p className="text-slate-300 text-sm leading-relaxed font-normal">
                        {interest}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Interest Focus Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
                    Artificial Intelligence
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.07] text-slate-300 text-xs font-medium">
                    Machine Learning
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.07] text-slate-300 text-xs font-medium">
                    Intelligent Systems
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.07] text-slate-300 text-xs font-medium">
                    Data-Driven Problem Solving
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.06] mt-6 flex items-center justify-between text-xs text-slate-400">
                <span>Learning Mindset</span>
                <span className="text-emerald-400 font-medium">Continuous Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
