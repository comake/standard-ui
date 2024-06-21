import React, { ReactNode } from 'react';
import { SvgSupportedIconProps } from './SvgIcon';
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
export declare function NavigationBarHeader({ contentLeft, contentRight, leftIcon, rightIcon, variant, className: cn, spacing, onClick, }: NavigationBarHeaderProps): React.JSX.Element;
export default NavigationBarHeader;
