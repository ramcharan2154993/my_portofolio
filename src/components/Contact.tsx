import { useState } from 'react';
import { portfolioData, isPlaceholder } from '../data/portfolioData';
import { Mail, MapPin, Send, Check, Copy, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LeetCodeIcon, LinkedinIcon } from './SocialIcons';

export const Contact = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (personal.email && !isPlaceholder(personal.email)) {
      navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-3 mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Interested in collaboration, internship opportunities, or algorithmic problem solving? Feel free to reach out.
          </p>
        </div>

        <div className="max-w-4xl bg-[#11161f]/80 border border-white/[0.07] rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Direct Email Card */}
            <div className="bg-[#0e141b]/90 border border-white/[0.06] rounded-2xl p-6 sm:p-7 space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  <Mail size={15} />
                  <span>Direct Communication</span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Email Inbox
                </h3>
                <p className="text-sm font-medium text-slate-300 break-all">
                  {personal.email}
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-700/80 hover:border-emerald-400/80 text-white font-medium text-xs sm:text-sm transition-all shadow-md shadow-black/40 hover:shadow-emerald-500/10"
                >
                  <Send size={13} className="text-emerald-400" />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-200 text-xs sm:text-sm font-medium transition-all"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Platforms Card */}
            <div className="bg-[#0e141b]/90 border border-white/[0.06] rounded-2xl p-6 sm:p-7 space-y-5 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  <MapPin size={15} />
                  <span>Current Base</span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {personal.location}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Available for technical internships, engineering mentorship, and open-source collaboration.
                </p>
              </div>

              {/* Platform Pills */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                {!isPlaceholder(personal.github) && (
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-emerald-500/40 text-xs font-medium text-slate-200 hover:text-white transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight size={11} className="text-slate-500" />
                  </a>
                )}

                {!isPlaceholder(personal.leetcode) && (
                  <a
                    href={personal.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-amber-500/40 text-xs font-medium text-slate-200 hover:text-white transition-all"
                  >
                    <LeetCodeIcon className="w-3.5 h-3.5 text-amber-500" />
                    <span>LeetCode</span>
                    <ArrowUpRight size={11} className="text-slate-500" />
                  </a>
                )}

                {!isPlaceholder(personal.linkedin) ? (
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-sky-500/40 text-xs font-medium text-slate-200 hover:text-white transition-all"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                    <span>LinkedIn</span>
                    <ArrowUpRight size={11} className="text-slate-500" />
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05] text-xs text-slate-500 select-none"
                    title="LinkedIn link pending"
                  >
                    <LinkedinIcon className="w-3 h-3 text-slate-600" />
                    <span>LinkedIn pending</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
