import { Fragment, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Briefcase, Github, MessageSquare } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import TechIcon from '../ui/TechIcon';
import ProjectVisual from '../ui/ProjectVisual';
import { journey, journeyMarkers, profile, type JourneyMarker, type Project } from '../../data/content';

const pad = (n: number) => String(n).padStart(2, '0');

/*
  Tracks which chapter sits in the middle of the viewport, and fills the
  timeline rail as the reader scrolls through the journey.
*/
const useJourney = (count: number) => {
  const [active, setActive] = useState(0);
  const [activeMarker, setActiveMarker] = useState<JourneyMarker | null>(null);
  const chapters = useRef<(HTMLLIElement | null)[]>([]);
  const rail = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!rail.current || !fill.current) return;
      const focus = window.innerHeight * 0.5;
      let closest = 0;
      let distance = Infinity;
      chapters.current.forEach((chapter, index) => {
        if (!chapter) return;
        const bounds = chapter.getBoundingClientRect();
        const nextDistance = Math.abs(bounds.top + bounds.height / 2 - focus);
        if (nextDistance < distance) { closest = index; distance = nextDistance; }
      });
      let marker: JourneyMarker | null = null;
      rail.current.querySelectorAll<HTMLElement>('[data-marker]').forEach((element) => {
        const bounds = element.getBoundingClientRect();
        const nextDistance = Math.abs(bounds.top + bounds.height / 2 - focus);
        if (nextDistance < distance) {
          distance = nextDistance;
          marker = journeyMarkers.find((item) => item.after === element.dataset.marker) ?? null;
        }
      });
      setActiveMarker(marker);
      setActive(closest);
      const rect = rail.current.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.5 - rect.top) / rect.height));
      fill.current.style.transform = `scaleY(${progress})`;
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
  }, [count]);

  const goTo = (i: number) => chapters.current[i]?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });

  return { active, activeMarker, chapters, rail, fill, goTo };
};

const ProjectLinks = ({ project }: { project: Project }) => {
  if (!project.liveUrl && !project.githubUrl) {
    return (
      <a href="#contact" className="btn-ghost h-10 px-4 text-[13px]">
        <MessageSquare size={15} aria-hidden="true" />
        Ask for a demo
      </a>
    );
  }
  const isProfile = project.githubUrl?.includes('?tab=');
  return (
    <>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary h-10 px-4 text-[13px]"
        >
          Live demo
          <ArrowUpRight size={15} aria-hidden="true" />
          <span className="sr-only">of {project.title} (opens in a new tab)</span>
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost h-10 px-4 text-[13px]"
        >
          <Github size={15} aria-hidden="true" />
          {isProfile ? 'Early repos' : 'Source code'}
          <span className="sr-only">for {project.title} (opens in a new tab)</span>
        </a>
      )}
    </>
  );
};

const CompanyLogo = ({ marker }: { marker: JourneyMarker }) => (
  <div className="flex items-center gap-3">
    <div className={`company-logo ${marker.logoSymbolOnly ? 'company-logo--symbol' : ''}`}>
      {marker.logo
        ? <img src={marker.logo} alt={marker.logoSymbolOnly ? '' : `${marker.organization} logo`} loading="lazy" />
        : <span aria-label={`${marker.organization} initials`}>{marker.initials}</span>}
    </div>
    {marker.logoSymbolOnly && (
      <span className="min-w-0 text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl">{marker.organization}</span>
    )}
  </div>
);

const RoleBrief = ({ marker }: { marker: JourneyMarker }) => (
  <div className="role-brief max-w-[30rem]">
    <p className="text-xs font-medium text-muted">What I worked on</p>
    <h4 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">{marker.focus}</h4>
    <ul className="mt-4 space-y-3">
      {marker.contributions.map((point) => (
        <li key={point} className="flex gap-3 text-base leading-relaxed text-soft">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const Marker = ({ marker, reached }: { marker: JourneyMarker; reached: boolean }) => (
  <li data-marker={marker.after} className="relative py-10 pl-12 sm:pl-14 lg:flex lg:min-h-[42vh] lg:items-center lg:py-10">
    <span
      className={`absolute left-0 top-14 grid h-8 w-8 place-items-center rounded-xl border bg-canvas transition-colors duration-500 lg:top-1/2 lg:-translate-y-1/2 ${
        reached ? 'border-primary/50 text-primary' : 'border-line text-muted'
      }`}
      aria-hidden="true"
    >
      <Briefcase size={14} />
    </span>
    <div className="w-full border-y border-line py-6 lg:max-w-xl">
      <p className="font-sans text-xs text-muted">{marker.date}</p>
      <h3 className="sr-only">{marker.organization}</h3>
      <div className="mt-3"><CompanyLogo marker={marker} /></div>
      <p className="mt-3 text-sm text-soft">{marker.role}</p>
      <div className="mt-7 lg:hidden"><RoleBrief marker={marker} /></div>
    </div>
  </li>
);

const Projects = () => {
  const { active, activeMarker, chapters, rail, fill, goTo } = useJourney(journey.length);
  const current = journey[active];

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24 sm:py-32">
      <div className="container-site">
        <SectionHeader
          id="projects"
          kicker="projects"
          title="My build journey"
          description="Small first builds. Real product challenges. A journey from learning the web to shipping for clients."
        />

        <div className="lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)] lg:gap-20">
          {/* Chapters */}
          <div ref={rail} className="relative">
            <div className="absolute bottom-0 left-[15px] top-0 w-[2px] rounded-full bg-line" aria-hidden="true" />
            <div
              ref={fill}
              className="absolute bottom-0 left-[15px] top-0 w-[2px] origin-top scale-y-0 rounded-full bg-primary"
              aria-hidden="true"
            />

            <ol>
              {journey.map((project, i) => {
                const reached = i <= active;
                const isActive = i === active;
                return (
                  <Fragment key={project.id}>
                    <li
                      ref={(el) => (chapters.current[i] = el)}
                      data-index={i}
                      data-project={project.id}
                      className={`relative py-10 pl-12 sm:pl-14 lg:flex lg:min-h-[78vh] lg:items-center lg:py-0 tone-primary`}
                    >
                      <span
                        className={`absolute left-0 top-12 grid h-8 w-8 place-items-center rounded-full border bg-canvas transition-colors duration-500 lg:top-1/2 lg:-translate-y-1/2 ${
                          isActive ? 'border-tone' : 'border-line'
                        }`}
                        aria-hidden="true"
                      >
                        <span
                          className={`h-2.5 w-2.5 rounded-full transition-all duration-500 ${
                            reached ? 'bg-tone' : 'bg-line'
                          } ${isActive ? 'scale-125' : ''}`}
                        />
                      </span>

                      <article
                        className={`journey-copy w-full transition-[opacity,transform] duration-500 lg:max-w-xl ${
                          isActive ? 'opacity-100' : 'lg:translate-y-3 lg:opacity-60'
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-sans text-xs text-tone">Chapter {pad(i + 1)}</span>
                          <span className="rounded-full border border-line px-2.5 py-0.5 font-sans text-[11px] text-muted">
                            {project.date}
                          </span>
                        </div>
                        <p className="mt-4 text-sm font-medium text-muted">{project.milestone}</p>
                        <h3 className="mt-1 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                          {project.title}
                        </h3>
                        <p className="mt-1 font-sans text-xs text-tone">{project.kind}</p>
                        <p className="mt-4 leading-relaxed text-soft sm:text-[17px]">{project.description}</p>

                        {project.metric && (
                          <div className="mt-5 flex items-baseline gap-3 border-l-2 border-tone/40 pl-4">
                            <span className="text-3xl font-semibold tracking-tight text-ink">
                              {project.metric.value}
                            </span>
                            <span className="text-sm text-muted">{project.metric.label}</span>
                          </div>
                        )}

                        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Tech used in ${project.title}`}>
                          {project.technologies.map((tech) => (
                            <li key={tech} className="chip">
                              <TechIcon name={tech} size={12} />
                              {tech}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap gap-2.5">
                          <ProjectLinks project={project} />
                        </div>

                        {/* Inline visual on smaller screens */}
                        <div className="mt-8 lg:hidden" aria-hidden="true">
                          <ProjectVisual project={project} />
                        </div>
                      </article>
                    </li>
                    {journeyMarkers
                      .filter((m) => m.after === project.id)
                      .map((m) => (
                        <Marker key={m.organization} marker={m} reached={active > i || activeMarker === m} />
                      ))}
                  </Fragment>
                );
              })}
            </ol>
          </div>

          {/* Pinned stage (large screens) */}
          <div className="hidden lg:block">
            <div className="journey-stage sticky top-24 flex h-[calc(100svh-7rem)] max-h-[820px] flex-col justify-center gap-5">
              <div className="flex items-baseline justify-between font-sans text-xs text-muted tone-primary">
                <p>
                  <span className="text-tone transition-colors duration-700">{activeMarker ? 'Along the way' : `Chapter ${pad(active + 1)} / ${pad(journey.length)}`}</span>
                </p>
                <p aria-live="polite">{activeMarker?.date ?? current.date}</p>
              </div>

              <div className="journey-preview relative w-full flex-1 min-h-0 max-h-[560px]">
                {journey.map((project, i) => (
                  <div
                    key={project.id}
                    aria-hidden="true"
                    className={`journey-slide absolute inset-0 flex items-center justify-center transition-[opacity,transform] duration-700 ease-out tone-primary ${
                      !activeMarker && i === active
                        ? 'translate-y-0 scale-100 opacity-100'
                        : i < active
                          ? 'pointer-events-none -translate-y-10 scale-[0.96] opacity-0'
                          : 'pointer-events-none translate-y-10 scale-[0.96] opacity-0'
                    }`}
                  >
                    <ProjectVisual project={project} />
                  </div>
                ))}
                {activeMarker && (
                  <div key={activeMarker.organization} className="absolute inset-0 flex items-center animate-rise [animation-duration:0.5s]">
                    <RoleBrief marker={activeMarker} />
                  </div>
                )}
              </div>

              <div className="tone-primary">
                <nav aria-label="Project chapters" className="grid grid-cols-4 gap-x-3 gap-y-1">
                  {journey.map((project, i) => (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`Go to chapter ${i + 1}: ${project.title}`}
                      aria-current={i === active ? 'step' : undefined}
                      title={project.title}
                      className="group min-w-0 py-2 text-left"
                    >
                      <span
                        className={`block h-1 rounded-full transition-colors duration-500 ${
                          i <= active ? 'bg-tone' : 'bg-line group-hover:bg-muted/50'
                        }`}
                      />
                      <span className={`mt-2 block truncate text-[11px] transition-colors ${i === active ? 'text-ink' : 'text-muted group-hover:text-ink'}`}>{pad(i + 1)} {project.title}</span>
                    </button>
                  ))}
                </nav>
                <p className="mt-3 flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium text-ink">{activeMarker?.organization ?? current.title}</span>
                  <span className="text-sm text-muted">{activeMarker ? 'Work experience' : current.milestone}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Reveal className="mt-12 pl-12 sm:pl-14 lg:pl-0">
          <a
            href={`${profile.githubHref}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-soft transition-colors hover:text-primary"
          >
            <Github size={16} aria-hidden="true" />
            See every repository on GitHub
            <ArrowUpRight
              size={15}
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
