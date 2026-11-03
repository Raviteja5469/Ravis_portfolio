import { ArrowUp } from 'lucide-react';
import { profile } from '../../data/content';

const Footer = () => (
  <footer className="border-t border-line">
    <div className="container-site flex flex-col items-center justify-between gap-4 py-10 text-sm text-muted sm:flex-row">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript and Tailwind CSS.
      </p>
      <a href="#top" className="group inline-flex items-center gap-1.5 transition-colors hover:text-primary">
        Back to top
        <ArrowUp size={15} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5" />
      </a>
    </div>
  </footer>
);

export default Footer;
