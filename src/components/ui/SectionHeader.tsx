import Reveal from './Reveal';

type SectionHeaderProps = {
  id: string;
  kicker: string;
  title: string;
  description?: string;
};

const SectionHeader = ({ id, kicker, title, description }: SectionHeaderProps) => (
  <Reveal className="mb-12 max-w-2xl sm:mb-14">
    <p className="font-sans text-sm text-primary">
      {kicker.charAt(0).toUpperCase() + kicker.slice(1)}
    </p>
    <h2 id={`${id}-title`} className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.1]">
      {title}
    </h2>
    {description && <p className="mt-4 text-lg leading-relaxed text-soft">{description}</p>}
  </Reveal>
);

export default SectionHeader;
