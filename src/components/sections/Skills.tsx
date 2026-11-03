import { Cloud, Code2, Database, LayoutTemplate, Server, Wrench, Terminal, type LucideIcon } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SpotlightCard from '../ui/SpotlightCard';
import TechIcon from '../ui/TechIcon';
import { skillGroups, aiTools } from '../../data/content';

// Bento layout: each group gets an icon and a column span on a 6-column grid.
const layout: Record<string, { icon: LucideIcon; span: string }> = {
  Frontend: { icon: LayoutTemplate, span: 'lg:col-span-3' },
  Backend: { icon: Server, span: 'lg:col-span-3' },
  Languages: { icon: Code2, span: 'lg:col-span-2' },
  Databases: { icon: Database, span: 'lg:col-span-2' },
  Tools: { icon: Wrench, span: 'lg:col-span-2' },
  'Cloud and DevOps': { icon: Cloud, span: 'lg:col-span-6' },
};

const order = ['Frontend', 'Backend', 'Languages', 'Databases', 'Tools', 'Cloud and DevOps'];

const Skills = () => {
  const groups = order
    .map((title) => skillGroups.find((g) => g.title === title))
    .filter((g): g is (typeof skillGroups)[number] => Boolean(g));

  return (
    <section id="skills" aria-labelledby="skills-title" className="py-24 sm:py-32">
      <div className="container-site">
        <SectionHeader
          id="skills"
          kicker="skills"
          title="My toolkit"
          description="The languages, frameworks and tools I use to take a feature from idea to production."
        />

        <Reveal className="mb-5">
          <div className="rounded-2xl border border-primary/25 bg-surface p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-lg">
              <h3 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight text-ink"><Terminal size={20} className="text-primary" aria-hidden="true" /> AI in my workflow</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">AI coding tools I use alongside my full stack development toolkit.</p>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2 lg:mt-0" aria-label="AI tools I use">
              {aiTools.map((name) => <li key={name} className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm font-medium text-ink"><TechIcon name={name} size={16} />{name}</li>)}
            </ul>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {groups.map((group, i) => {
            const { icon: Icon, span } = layout[group.title];
            const tone = 'bg-primary/10 text-primary';
            return (
              <Reveal key={group.title} delay={(i % 3) * 100} className={`${span} ${i === groups.length - 1 ? 'sm:col-span-2' : ''}`}>
                <SpotlightCard className="h-full p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className={`grid h-10 w-10 place-items-center rounded-xl ${tone}`} aria-hidden="true">
                      <Icon size={19} />
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight text-ink">{group.title}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-2 rounded-xl border border-line bg-canvas px-3 py-2 text-sm text-soft transition-colors duration-300 hover:border-primary/40 hover:text-primary"
                      >
                        <TechIcon name={item} size={15} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
