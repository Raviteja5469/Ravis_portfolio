import { useEffect, useRef, useState } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../hooks/useTheme';
import { navSections } from '../data/content';
import resumePdf from '../assets/Raviteja_resume.pdf';

const sectionIds = navSections.map((s) => s.id);

const ScrollProgress = () => {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return (
    <div ref={bar} aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left scale-x-0 bg-primary" />
  );
};

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const roundBtn =
    'inline-flex h-10 w-10 items-center justify-center rounded-full text-soft transition-colors hover:bg-ink/[0.06] hover:text-ink';

  return (
    <>
      <ScrollProgress />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-canvas"
      >
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div
          className={`mx-auto flex h-14 w-full max-w-3xl items-center justify-between gap-3 rounded-full border px-3 md:w-fit md:justify-start md:gap-5 transition-all duration-500 ${
            scrolled || open
              ? 'border-line bg-surface/75 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.35)] backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <a href="#top" className="grid h-10 w-10 shrink-0 place-items-center rounded-full" aria-label="Raviteja Seguri, back to top">
            <span className="brand-monogram inline-block leading-none" aria-hidden="true">rs<span>.</span></span>
          </a>

          <nav className="hidden items-center md:flex" aria-label="Primary">
            {navSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-current={active === s.id ? 'location' : undefined}
                className={`rounded-full px-3.5 py-2 text-sm transition-colors duration-300 ${
                  active === s.id ? 'bg-primary/10 text-primary' : 'text-soft hover:text-ink'
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={toggleTheme}
              className={roundBtn}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            </button>
            <a href={resumePdf} download="Raviteja-Seguri-Resume.pdf" className="btn-ink ml-1 hidden h-10 px-4 sm:inline-flex">
              <Download size={15} aria-hidden="true" />
              Resume
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`${roundBtn} md:hidden`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="mx-auto mt-2 max-w-3xl animate-rise rounded-3xl border border-line bg-surface/95 p-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)] backdrop-blur-xl [animation-duration:0.35s] md:hidden"
          >
            <ul>
              {navSections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-base transition-colors ${
                      active === s.id ? 'bg-primary/10 text-primary' : 'text-soft hover:text-ink'
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href={resumePdf} download="Raviteja-Seguri-Resume.pdf" className="btn-ink mt-2 w-full">
              <Download size={15} aria-hidden="true" />
              Download resume
            </a>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navigation;
