import { portfolioData, isPlaceholder } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LeetCodeIcon, LinkedinIcon } from './SocialIcons';

export const Footer = () => {
  const { personal, education } = portfolioData;
  const primaryEdu = education[0];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#090d12] py-12 text-slate-400 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1">
              <span className="font-bold text-white tracking-tight text-lg">Ramcharan</span>
              <span className="text-emerald-400 font-black text-xl leading-none">.</span>
            </div>
            {primaryEdu && (
              <p className="text-xs text-slate-400">
                {primaryEdu.degree} • {primaryEdu.institution}
              </p>
            )}
            <p className="text-xs text-slate-500 pt-0.5">
              Designed with precision, restrained aesthetics, and full accessibility.
            </p>
          </div>

          <div className="flex items-center gap-5">
            {/* Social Icons row */}
            <div className="flex items-center space-x-2">
              {!isPlaceholder(personal.github) && (
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}

              {!isPlaceholder(personal.leetcode) && (
                <a
                  href={personal.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-amber-400 transition-colors"
                  aria-label="LeetCode Profile"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                </a>
              )}

              {!isPlaceholder(personal.linkedin) ? (
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-sky-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              ) : null}
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-all px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08]"
              aria-label="Scroll back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp size={13} className="text-emerald-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
