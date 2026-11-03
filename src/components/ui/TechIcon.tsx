import { techIcons } from '../../data/icons';

type TechIconProps = {
  name: string;
  size?: number;
  colored?: boolean;
  className?: string;
};

// Very dark brand colours (Express, Vercel, GitHub…) would vanish on the dark canvas.
const isTooDark = (hex: string) => {
  const n = parseInt(hex, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 60;
};

const TechIcon = ({ name, size = 16, colored = false, className = '' }: TechIconProps) => {
  const icon = techIcons[name];
  if (!icon) return null;
  const fill = colored && !isTooDark(icon.hex) ? `#${icon.hex}` : 'currentColor';
  return (
    <svg role="img" aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill={fill} className={`shrink-0 ${className}`}>
      <path d={icon.path} />
    </svg>
  );
};

export default TechIcon;
