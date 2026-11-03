import { useEffect, useRef } from 'react';

export default function PortfolioIntro({ onComplete }: { onComplete: () => void }) {
  const skip = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    skip.current?.focus({ preventScroll: true });
    // A fixed intro, not a network-loading gate. Always release the page.
    const timer = window.setTimeout(onComplete, 3000);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onComplete();
      if (event.key === 'Tab') { event.preventDefault(); skip.current?.focus(); }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onComplete]);

  return (
    <div className="portfolio-intro" role="dialog" aria-modal="true" aria-labelledby="intro-title">
      <span className="brand-monogram intro-corner-mark" aria-hidden="true">rs<span>.</span></span>
      <div className="intro-center">
        <p className="intro-byline">Raviteja Seguri / Full Stack Developer</p>
        <p id="intro-title" className="intro-headline">
          <span className="intro-word-window"><span>Ideas into</span></span>
          <span className="intro-word-window"><span>interfaces.</span></span>
        </p>
        <p className="intro-caption">Thoughtfully built. Ready to explore.</p>
        <div className="intro-track" aria-hidden="true"><span /></div>
      </div>
      <div className="intro-bottomline">
        <button ref={skip} type="button" onClick={onComplete}>Skip intro</button>
      </div>
    </div>
  );
}
