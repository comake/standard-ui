import React, { ReactNode, useMemo } from 'react';
import SvgIcon, { SvgSupportedIconProps }from './SvgIcon';

type NavigationBarVariants = 'primary' | 'secondary';
type SpacingVariants = 0 | 1 | 2;

interface NavigationBarHeaderProps {
  contentLeft: string | ReactNode;
  contentRight?: string | ReactNode;
  variant?: NavigationBarVariants;
  leftIcon?: SvgSupportedIconProps['icon'];
  rightIcon?: SvgSupportedIconProps['icon'];
  className?: string;
  spacing?: SpacingVariants;
  onClick?: () => void;
}
const variantClassMapping: Record<NavigationBarVariants, string> = {
  primary: 'primary',
  secondary: 'secondary',
};

const spacingClassMapping: Record<SpacingVariants, string> = {
  '0': 'level-0',
  '1': 'level-1',
  '2': 'level-2',
};
export function NavigationBarHeader({
  contentLeft,
  contentRight,
  leftIcon,
  rightIcon,
  variant = 'primary',
  className: cn,
  spacing = 0,
  onClick,
}: NavigationBarHeaderProps) {
  const spacingClassName = useMemo(() => spacingClassMapping[spacing], [spacing]);

  const className = useMemo(
    () =>
      [
        'navigation-bar-header flex justify-between',
        spacingClassName,
        variantClassMapping[variant],
        cn,
        onClick ? 'cursor-pointer' : '',
      ].join(' '),
    [cn, onClick, spacingClassName, variant]
  );

  return (
    <div className={className} onClick={onClick}>
      <div className="flex gap-[inherit] items-center justify-between">
        {!!leftIcon && <SvgIcon className="icon" icon={leftIcon} />}
        {contentLeft}
      </div>
      <div className="flex gap-[inherit] items-center">
        {contentRight}
        {!!rightIcon && <SvgIcon className="icon" icon={rightIcon} />}
      </div>
    </div>
  );
}

export default NavigationBarHeader;
