import type { ElementType, PointerEvent, ReactNode } from 'react';

type SpotlightCardProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

const track = (e: PointerEvent<HTMLElement>) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--x', `${e.clientX - rect.left}px`);
  el.style.setProperty('--y', `${e.clientY - rect.top}px`);
};

const SpotlightCard = ({ children, as: Tag = 'div', className = '' }: SpotlightCardProps) => (
  <Tag onPointerMove={track} className={`spotlight ${className}`}>
    {children}
  </Tag>
);

export default SpotlightCard;
