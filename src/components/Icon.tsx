// src/components/Icon.tsx
import type { ReactNode } from 'react';
import { renderIcon, type IconSize } from '@/integrations/icons';
import type { IconType } from '@/content/schema';

export interface IconProps {
  icon: IconType;
  size?: IconSize;
  className?: string;
  color?: string;
  /** Accessibility label for the icon. If not provided, icon is treated as decorative (aria-hidden="true") */
  'aria-label'?: string;
  /** Explicitly set aria-hidden. Default: true when no aria-label, false when aria-label is provided */
  'aria-hidden'?: boolean;
}

export default function Icon({
  icon,
  size = 'md',
  className = '',
  color,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}: IconProps): ReactNode {
  return renderIcon(icon, {
    size,
    className,
    color,
    ariaLabel,
    ariaHidden,
  });
}
