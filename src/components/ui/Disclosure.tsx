import { useId, useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

type DisclosureProps = {
  label: string;
  children: ReactNode;
};

const Disclosure = ({ label, children }: DisclosureProps) => {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="disclosure mt-8">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="btn-ghost h-10 px-4"
      >
        {open ? `Hide ${label.toLowerCase()}` : `Show ${label.toLowerCase()}`}
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows,opacity,visibility] duration-500 ease-out ${
          open ? 'visible grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-1 pt-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Disclosure;
