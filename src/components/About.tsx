import { portfolioData, isPlaceholder } from '../data/portfolioData';
import { MapPin, GraduationCap, Target, Sparkles, BookOpen } from 'lucide-react';

export const About = () => {
  const { personal, education } = portfolioData;
  const primaryEdu = education[0];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-3 mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            A closer look at my academic background, technical drive, and engineering philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Narrative Card (8 cols) */}
          <div className="lg:col-span-7 bg-[#11161f]/80 border border-white/[0.07] rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-5">
              <div className="flex items-center gap-2.5 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
                <Sparkles size={15} />
                <span>Engineering Mindset</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Driven by Logic. Defined by Precision.
              </h3>

              {isPlaceholder(personal.about) ? (
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900/50 p-4">
                  <p className="text-sm text-slate-400 font-mono">
                    {personal.about}
                  </p>
                </div>
              ) : (
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                  {personal.about}
                </p>
              )}
            </div>

            {/* Quick Metadata Highlights */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
              {!isPlaceholder(personal.location) && (
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
                  <MapPin size={14} className="text-emerald-400" />
                  <span>Based in {personal.location}</span>
                </div>
              )}
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
                <Target size={14} className="text-emerald-400" />
                <span>DSA Problem Solving</span>
              </div>
            </div>
          </div>

          {/* Side Info Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* University Highlight Card */}
            {primaryEdu && (
              <div className="bg-[#11161f]/80 border border-white/[0.07] rounded-3xl p-7 sm:p-8 space-y-4 shadow-sm flex-1">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <GraduationCap size={20} />
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    {primaryEdu.duration}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {primaryEdu.degree}
                  </h4>
                  <p className="text-sm font-medium text-slate-300">
                    {primaryEdu.institution}
                  </p>
                </div>

                {primaryEdu.status && (
                  <p className="text-xs text-slate-400 pt-2 border-t border-white/[0.05]">
                    <span className="text-slate-300 font-medium">Status: </span>
                    {primaryEdu.status}
                  </p>
                )}
              </div>
            )}

            {/* Academic Ambition Card */}
            <div className="bg-[#11161f]/80 border border-white/[0.07] rounded-3xl p-7 sm:p-8 space-y-3 shadow-sm flex-1">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit">
                <BookOpen size={20} />
              </div>

              <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Academic & Technical Stature
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Maintained a 9.89 CGPA through 3 semesters with 10.0 in the first semester, and scored 10/10 in college-wide Java Programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
