import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Terminal } from 'lucide-react';
import type { CSSProperties } from 'react';
import { profile, aiTools } from '../../data/content';
import { marqueeTech } from '../../data/icons';
import TechIcon from '../ui/TechIcon';
import resumePdf from '../../assets/Raviteja_resume.pdf';

const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

const LiveDot = () => (
  <span className="relative flex h-2 w-2" aria-hidden="true">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
  </span>
);

const DevelopmentSetup = () => (
  <div className="development-setup overflow-hidden rounded-2xl border border-line bg-surface">
    <div className="flex items-center gap-2.5 border-b border-line px-6 py-4 text-sm text-soft">
      <Code2 size={17} className="text-primary" aria-hidden="true" />
      My development setup
    </div>
    <div className="p-6 sm:p-8">
      <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.04em] text-ink">
        Full stack foundations.<br />AI in the workflow.
      </h2>
      <div className="mt-8">
        <p className="text-xs font-medium text-muted">The stack</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {['React', 'Node.js', 'MongoDB', 'TypeScript'].map((name) => (
            <li key={name} className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm text-soft">
              <TechIcon name={name} size={16} />{name}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 border-t border-line pt-6">
        <p className="flex items-center gap-2 text-xs font-medium text-primary"><Terminal size={14} aria-hidden="true" /> AI tools I use</p>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-3">
          {aiTools.map((name) => <li key={name} className="flex items-center gap-2 text-sm font-medium text-ink"><TechIcon name={name} size={16} />{name}</li>)}
        </ul>
      </div>
    </div>
    <div className="flex items-center gap-2.5 border-t border-line px-6 py-4 text-sm text-soft">
      <LiveDot /> Currently building at <span className="font-medium text-ink">Workelate</span>
    </div>
  </div>
);

const Marquee = () => {
  const items = [...marqueeTech, ...marqueeTech];
  return (
    <div className="group relative border-y border-line py-7">
      <p className="sr-only">Technologies I work with: {marqueeTech.join(', ')}</p>
      <div className="fade-edges overflow-hidden" aria-hidden="true">
        <ul className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]">
          {items.map((name, i) => (
            <li key={`${name}-${i}`} className="flex items-center gap-2.5 text-[15px] text-muted transition-colors duration-300 hover:text-primary">
              <TechIcon name={name} size={20} />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Hero = () => (
  <>
    <section id="top" className="relative isolate overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-44">
      <div className="grid-backdrop pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-site grid items-center gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
        <div className="min-w-0">
          <p
            className="inline-flex animate-rise items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pl-3 pr-4 text-sm text-soft"
            style={delay(50)}
          >
            <LiveDot />
            {profile.availability}
          </p>

          <h1 className="mt-7 text-[clamp(2.75rem,5.8vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
            <span className="block animate-rise text-ink" style={delay(150)}>
              {profile.name}
            </span>
            <span className="block animate-rise text-muted" style={delay(250)}>
              {profile.role}
            </span>
          </h1>

          <p className="mt-5 flex items-center gap-2 text-sm font-medium text-primary"><Terminal size={16} aria-hidden="true" /> Full stack development, with AI in the loop.</p>

          <p className="mt-4 max-w-[54ch] animate-rise text-lg leading-relaxed text-soft sm:text-xl sm:leading-relaxed" style={delay(350)}>
            {profile.intro}
          </p>

          <div className="mt-10 flex animate-rise flex-wrap items-center gap-3" style={delay(450)}>
            <a href={resumePdf} download="Raviteja-Seguri-Resume.pdf" className="btn-primary h-12 px-6">
              <Download size={17} aria-hidden="true" />
              Download resume
            </a>
            <a href="#contact" className="btn-ghost group h-12 px-6">
              Get in touch
              <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <div className="flex gap-2 sm:ml-2">
              <a href={profile.githubHref} target="_blank" rel="noopener noreferrer" className="icon-btn h-12 w-12" aria-label="GitHub (opens in a new tab)">
                <Github size={19} aria-hidden="true" />
              </a>
              <a href={profile.linkedinHref} target="_blank" rel="noopener noreferrer" className="icon-btn h-12 w-12" aria-label="LinkedIn (opens in a new tab)">
                <Linkedin size={19} aria-hidden="true" />
              </a>
              <a href={profile.emailHref} className="icon-btn h-12 w-12" aria-label={`Email ${profile.email}`}>
                <Mail size={19} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="min-w-0 animate-rise" style={delay(400)}>
          <DevelopmentSetup />
        </div>
      </div>
    </section>
    <Marquee />
  </>
);

export default Hero;
