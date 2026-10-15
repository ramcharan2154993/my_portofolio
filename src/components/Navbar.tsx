import { useState, useEffect } from 'react';
import { portfolioData, isPlaceholder } from '../data/portfolioData';
import { Menu, X, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './SocialIcons';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { personal } = portfolioData;

  // Close mobile menu on Escape key press for keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0f14]/80 backdrop-blur-md border-b border-white/[0.06] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand Name inspired by reference */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              className="flex items-center gap-1.5 text-white font-bold tracking-tight text-xl hover:text-emerald-300 focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md transition-colors"
            >
              <span>Ramcharan</span>
              <span className="text-emerald-400 font-black text-2xl leading-none">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md px-1 py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Header Action */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/40 text-xs font-medium text-slate-200 hover:text-white transition-all shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Contact me</span>
            </a>
          </div>

          {/* Mobile Menu Button with aria attributes */}
          <div className="flex md:hidden">
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-slate-400 hover:text-slate-100 p-2 rounded-lg focus-visible:ring-2 focus-visible:ring-emerald-400 transition-colors"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden border-b border-white/[0.08] bg-[#0c1016]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1"
          aria-label="Mobile Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/[0.04] focus-visible:ring-2 focus-visible:ring-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-4 border-t border-slate-800 flex flex-col space-y-2">
            {!isPlaceholder(personal.github) && (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex items-center space-x-2 px-3 py-2 text-sm text-slate-300 hover:text-emerald-400"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
            )}

            {!isPlaceholder(personal.leetcode) && (
              <a
                href={personal.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex items-center space-x-2 px-3 py-2 text-sm text-slate-300 hover:text-amber-400"
              >
                <LeetCodeIcon className="w-4 h-4" />
                <span>LeetCode Profile</span>
              </a>
            )}

            {!isPlaceholder(personal.linkedin) ? (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex items-center space-x-2 px-3 py-2 text-sm text-slate-300 hover:text-emerald-400"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
            ) : (
              <span className="px-3 py-2 text-xs font-mono text-slate-500 bg-slate-900 rounded border border-slate-800 flex items-center space-x-2 select-none">
                <LinkedinIcon className="w-3.5 h-3.5 text-slate-600" />
                <span>LinkedIn: {personal.linkedin}</span>
              </span>
            )}

            {!isPlaceholder(personal.email) && (
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center space-x-2 px-3 py-2 text-sm text-slate-300 hover:text-emerald-400"
              >
                <Mail size={16} />
                <span>{personal.email}</span>
              </a>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};
