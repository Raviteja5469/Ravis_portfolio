import ProjectPreview from './ProjectPreviews';
import type { Project } from '../../data/content';

const hostOf = (url?: string) => {
  try {
    return url ? new URL(url).hostname.replace(/^www\./, '') : '';
  } catch {
    return '';
  }
};

// Real screenshot in a browser frame when we have one, otherwise the illustration.
const ProjectVisual = ({ project }: { project: Project }) => {
  if (project.artwork) {
    return (
      <figure className={`project-artwork w-full ${project.presentation === 'phone' ? 'project-artwork--phone' : ''}`}>
        <img src={project.artwork} alt={`Concept preview for ${project.title}`} width={project.presentation === 'phone' ? 1024 : 1536} height={project.presentation === 'phone' ? 1536 : 1024} loading="lazy" decoding="async" className={`block w-full rounded-2xl object-contain ${project.presentation === 'phone' ? 'aspect-[2/3]' : 'aspect-[3/2]'}`} />
        <figcaption className="mt-3 text-center text-xs text-muted">Concept preview</figcaption>
      </figure>
    );
  }

  if (project.screenshot && project.presentation) {
    return (
      <figure className={`project-capture project-capture--${project.presentation}`}>
        <img src={project.screenshot} alt={`${project.title} ${project.presentation === 'phone' ? 'Telegram job feed' : 'storefront'}`} loading="lazy" decoding="async" width={project.presentation === 'phone' ? 682 : 1952} height={project.presentation === 'phone' ? 1336 : 1269} />
      </figure>
    );
  }

  if (!project.screenshot) {
    return (
      <div className="flex w-full justify-center lg:scale-110">
        <ProjectPreview id={project.id} />
      </div>
    );
  }

  return (
    <figure className="w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_30px_70px_-30px_rgba(0,0,0,0.55)]">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" aria-hidden="true" />
        <span className="ml-2 flex-1 truncate rounded-md bg-ink/[0.05] px-3 py-1 text-center font-sans text-[11px] text-muted">
          {hostOf(project.liveUrl)}
        </span>
        <span className="w-[42px]" aria-hidden="true" />
      </div>
      <img
        src={project.screenshot}
        alt={`Screenshot of ${project.title}`}
        width={1600}
        height={1000}
        loading="lazy"
        decoding="async"
        className="block aspect-[16/10] w-full object-cover object-top"
      />
    </figure>
  );
};

export default ProjectVisual;
