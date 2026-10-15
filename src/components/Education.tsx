import { portfolioData, type EducationItem } from '../data/portfolioData';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-3 mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            A consistent record of academic excellence from high school through computer science engineering.
          </p>
        </div>

        {/* Timeline / Cards */}
        <div className="space-y-6">
          {education.map((item: EducationItem, index: number) => (
            <div
              key={index}
              className="bg-[#11161f]/80 border border-white/[0.07] rounded-3xl p-7 sm:p-9 hover:border-white/20 transition-all shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <GraduationCap size={18} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.institution}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 font-medium pl-10">
                    {item.degree}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-white/[0.04] px-4 py-2 rounded-full border border-white/[0.08] w-fit">
                  <Calendar size={13} className="text-emerald-400" />
                  <span>{item.duration}</span>
                </div>
              </div>

              {item.status && (
                <div className="pt-4 border-t border-white/[0.06] mt-5 flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-emerald-300 text-xs sm:text-sm font-semibold">
                    Current Status:
                  </span>
                  <span className="text-slate-300 text-xs sm:text-sm">
                    {item.status}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
