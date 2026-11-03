import { Award, GraduationCap, Languages, MapPin } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SpotlightCard from '../ui/SpotlightCard';
import { about, education, certifications, profile } from '../../data/content';
import portrait from '../../assets/portrait.webp';

const About = () => (
  <section id="about" aria-labelledby="about-title" className="py-24 sm:py-32">
    <div className="container-site">
      <SectionHeader id="about" kicker="about" title="A bit about me" />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)]">
        <Reveal>
          <SpotlightCard className="h-full p-6 sm:p-7">
            <div className="overflow-hidden rounded-2xl border border-line">
              <img
                src={portrait}
                alt="Raviteja Seguri"
                width={192}
                height={192}
                loading="lazy"
                className="aspect-square w-full object-cover grayscale transition-all duration-700 hover:scale-[1.03] hover:grayscale-0"
              />
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">{profile.name}</h3>
            <p className="text-soft">
              {profile.role} at {profile.company}
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-soft">
              <li className="flex items-center gap-2.5">
                <MapPin size={16} className="text-primary" aria-hidden="true" />
                {profile.location}
              </li>
              <li className="flex items-center gap-2.5">
                <Languages size={16} className="text-primary" aria-hidden="true" />
                {profile.languages.join(', ')}
              </li>
            </ul>
          </SpotlightCard>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal delay={100}>
            <div className="space-y-5 text-lg leading-relaxed text-soft sm:text-xl sm:leading-relaxed">
              {about.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal delay={150} className="h-full">
              <SpotlightCard className="h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary" aria-hidden="true">
                    <GraduationCap size={19} />
                  </span>
                  <h3 className="font-semibold text-ink">Education</h3>
                </div>
                <ul className="mt-5 space-y-4">
                  {education.map((item) => (
                    <li key={item.id}>
                      <p className="font-medium text-ink">{item.title}</p>
                      <p className="text-sm text-soft">{item.organization}</p>
                      <p className="mt-1 font-sans text-xs tabular-nums text-muted">{item.period}</p>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={250} className="h-full">
              <SpotlightCard className="h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary" aria-hidden="true">
                    <Award size={19} />
                  </span>
                  <h3 className="font-semibold text-ink">Certifications</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex gap-3 text-soft">
                      <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
