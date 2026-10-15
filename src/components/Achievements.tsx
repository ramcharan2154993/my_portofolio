import { portfolioData, isPlaceholder, type AchievementItem } from '../data/portfolioData';
import { Trophy, Award, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';

export const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-3 mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Honors & Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Achievements
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Demonstrated commitment to academic rigor, problem-solving mastery, and competitive excellence.
          </p>
        </div>

        {/* Grid of Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement: AchievementItem) => {
            const hasValidProof = achievement.proofUrl && !isPlaceholder(achievement.proofUrl);

            return (
              <div
                key={achievement.id}
                className="bg-[#11161f]/80 border border-white/[0.07] rounded-3xl p-7 sm:p-8 space-y-5 flex flex-col justify-between hover:border-emerald-500/30 hover:shadow-lg hover:shadow-black/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      {achievement.proofUrl ? <Trophy size={18} /> : <Award size={18} />}
                    </div>
                    {achievement.date && !isPlaceholder(achievement.date) && (
                      <span className="text-[11px] font-medium text-slate-400 bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.06]">
                        {achievement.date}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    {achievement.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {achievement.description}
                  </p>
                </div>

                {/* Show proofUrl link when present and valid */}
                {hasValidProof && (
                  <div className="pt-4 border-t border-white/[0.06]">
                    <a
                      href={achievement.proofUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-emerald-500/40 text-xs font-medium text-slate-200 hover:text-white transition-all shadow-sm"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                      <span>View post verification</span>
                      <ArrowUpRight size={13} className="text-slate-400" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
