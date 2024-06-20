import React from 'react';
import { twJoin } from 'tailwind-merge';

interface ToggleProps {
  onToggle: () => void;
  isActive: boolean;
}

export function Toggle({ isActive, onToggle }: ToggleProps) {
  return (
    <div
      className={twJoin(
        'toggle primary w-10 min-w-10 transition-all cursor-pointer relative',
        isActive ? 'selected' : ''
      )}
      tabIndex={0}
      onClick={onToggle}
    >
      <div
        className={twJoin(
          'icon bg-base rounded-system-radius-pill w-5 h-5 transition-all',
          isActive ? 'selected translate-x-full -ml-2.5' : ''
        )}
      ></div>
    </div>
  );
}

export default Toggle;
