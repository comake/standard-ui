import React, { ReactNode } from 'react';
import { SvgExternalIconProps, SvgSupportedIconProps } from './SvgIcon';
import { TooltipProps } from './Tooltip';
type SpacingVariants = 0 | 1 | 2;
type NavigationBarVariants = 'primary' | 'secondary';
export interface NavigationBarItemClasses {
    root?: string;
    textLeft?: string;
    textRight?: string;
    startIcon?: string;
    endIcon?: string;
}
export interface NavigationBarItemProps {
    endIcon?: SvgSupportedIconProps['icon'] | SvgExternalIconProps['ExternalIcon'];
    textLeft: ReactNode;
    textRight?: ReactNode;
    startIcon?: SvgSupportedIconProps['icon'] | SvgExternalIconProps['ExternalIcon'];
    classes?: NavigationBarItemClasses;
    handleIconClick?: React.MouseEventHandler<HTMLButtonElement>;
    onClick?: React.MouseEventHandler<HTMLLIElement | HTMLAnchorElement>;
    disabled?: boolean;
    isActive?: boolean;
    spacing?: SpacingVariants;
    variant?: NavigationBarVariants;
    leftIndent?: number;
    isIconButton?: boolean;
    className?: string;
    link?: string;
    tooltipProps?: TooltipProps;
    LinkComponent?: React.ElementType;
    onContextMenu?: (e: React.MouseEvent<HTMLAnchorElement | HTMLLIElement>) => void;
}
export declare const NavigationBarItem: React.ForwardRefExoticComponent<NavigationBarItemProps & React.RefAttributes<HTMLAnchorElement | HTMLLIElement>>;
export default NavigationBarItem;
