import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SpotlightCard from '../ui/SpotlightCard';
import Disclosure from '../ui/Disclosure';
import TechIcon from '../ui/TechIcon';
import { workExperience, earlierWork } from '../../data/content';

const Experience = () => (
  <section id="work" aria-labelledby="work-title" className="py-24 sm:py-32">
    <div className="container-site">
      <SectionHeader
        id="work"
        kicker="experience"
        title="Where I’ve worked"
        description="Product teams where I ship features real users depend on."
      />

      <ol className="relative space-y-6 sm:before:absolute sm:before:bottom-6 sm:before:left-[15px] sm:before:top-6 sm:before:w-px sm:before:bg-line">
        {workExperience.map((job, i) => (
          <Reveal as="li" key={job.id} delay={i * 120} className="relative sm:pl-14">
            <span
              className="absolute left-0 top-8 hidden h-8 w-8 sm:grid place-items-center rounded-full border border-line bg-canvas"
              aria-hidden="true"
            >
              <span className={`h-2.5 w-2.5 rounded-full ${job.current ? 'bg-primary' : 'bg-muted/60'}`} />
            </span>

            <SpotlightCard as="article" className="p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className={`flex h-14 shrink-0 items-center justify-center rounded-xl border border-line bg-white p-2 ${job.id === 'workelate' ? 'w-24 sm:w-28' : 'w-14'}`}>
                    <img src={job.logo} alt="" width={112} height={56} className="h-full w-full object-contain" loading="lazy" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-ink">{job.organization}</h3>
                    <p className="text-soft">{job.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {job.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                      Current
                    </span>
                  )}
                  <span className="rounded-full border border-line px-3 py-1 font-sans text-xs tabular-nums text-muted">
                    {job.period}
                  </span>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed text-soft">
                    <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Tech used at ${job.organization}`}>
                {job.technologies.map((tech) => (
                  <li key={tech} className="chip">
                    <TechIcon name={tech} size={12} />
                    {tech}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </ol>

      <Reveal className="sm:pl-14">
        <Disclosure label={`Earlier internships (${earlierWork.length})`}>
          <ul className="grid gap-4 md:grid-cols-3">
            {earlierWork.map((job) => (
              <SpotlightCard as="li" key={job.id} className="p-5">
                <div className="mb-4 flex h-14 w-32 items-center justify-center rounded-xl border border-line bg-white p-2">
                  <img src={job.logo} alt="" width={128} height={56} className="h-full w-full object-contain" loading="lazy" />
                </div>
                <p className="font-sans text-xs tabular-nums text-muted">{job.period}</p>
                <h3 className="mt-3 font-semibold text-ink">{job.organization}</h3>
                <p className="text-sm text-soft">{job.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{job.detail}</p>
              </SpotlightCard>
            ))}
          </ul>
        </Disclosure>
      </Reveal>
    </div>
  </section>
);

export default Experience;
