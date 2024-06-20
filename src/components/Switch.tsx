import React, { useCallback } from 'react';
import SvgIcon, { SvgSupportedIconProps }from './SvgIcon';
import { twJoin } from 'tailwind-merge';

export interface SwitchConfig {
  id: string;
  label: string;
  icon: SvgSupportedIconProps['icon'];
}

export interface SwitchProps {
  orientation?: 'vertical' | 'horizontal';
  configList: SwitchConfig[];
  onChange: (id: SwitchConfig['id']) => void;
  activeId: string;
}

export function Switch({
  orientation = 'horizontal',
  configList,
  onChange,
  activeId,
}: SwitchProps) {
  return (
    <div
      className={[
        'flex switch w-fit !bg-transparent',
        orientation === 'vertical' ? 'flex-col' : '',
      ].join(' ')}
    >
      {configList.map(({ id, label, icon }, index) => {
        let roundSide: SwitchButtonProps['roundSide'] = undefined;
        if (index === 0) {
          roundSide = orientation === 'vertical' ? 'top' : 'left';
        } else if (index === configList.length - 1) {
          roundSide = orientation === 'vertical' ? 'bottom' : 'right';
        }
        return (
          <SwitchButton
            key={id}
            id={id}
            label={label}
            icon={icon}
            onChange={onChange}
            isActive={id === activeId}
            roundSide={roundSide}
          />
        );
      })}
    </div>
  );
}

export default Switch;

type RoundedSides = 'left' | 'right' | 'top' | 'bottom';

interface SwitchButtonProps extends SwitchConfig, Pick<SwitchProps, 'onChange'> {
  isActive: boolean;
  roundSide?: RoundedSides;
}

const roundedSideToClassName: Record<RoundedSides, string> = {
  bottom: 'rounded-b-md !border-b-1 !border-t-0',
  top: 'rounded-t-md !border-t-1 !border-b-0',
  left: 'rounded-l-md !border-l-1 !border-r-0',
  right: 'rounded-r-md !border-r-1 !border-l-0',
};

export function SwitchButton({
  id,
  label,
  icon,
  onChange,
  isActive,
  roundSide,
}: SwitchButtonProps) {
  const handleClick = useCallback(() => {
    onChange(id);
  }, [id, onChange]);

  return (
    
    <button
      key={id}
      onClick={handleClick}
      className={twJoin(
        'switch inline-flex items-center primary',
        roundSide ? roundedSideToClassName[roundSide] : '',
        isActive ? 'selected' : ''
      )}
    >
      {label}
      <SvgIcon
        className={['icon', isActive ? 'icon-selected' : ''].join(' ')}
        icon={icon}
      />
    </button>
  );
}
