import React from 'react';
import SvgIcon, { SvgSupportedIconProps }from './SvgIcon';

interface TagProps {
  variant: string;
  label: string;
  icon?: SvgSupportedIconProps['icon'];
}

export function Tag({ label, variant, icon }: TagProps) {
  return (
    <div className={`${variant} flex items-center justify-center tags w-fit`}>
      {!!icon && <SvgIcon icon={icon} />}
      {label}
    </div>
  );
}

export default Tag;
