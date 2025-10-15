import React, { ReactNode } from 'react';
import { SvgExternalIconProps, SvgSupportedIconProps } from './SvgIcon';
import { TooltipProps } from './Tooltip';
type SpacingVariants = 0 | 1 | 2;
type NavigationBarVariants = 'primary' | 'secondary';
export interface NavigationBarItemClasses {
    root?: string;
    startIcon?: string;
    endIcon?: string;
}
/**
 * NavigationBarItem component for creating navigation items with icons, text, and interactive states.
 * Can render as either a list item or a link element.
 */
export interface NavigationBarItemProps {
    /** Icon displayed at the end of the navigation item */
    endIcon?: SvgSupportedIconProps['icon'] | SvgExternalIconProps['ExternalIcon'];
    /** Primary text content displayed on the left side. Required but can be hidden if isIconButton is true */
    textLeft: ReactNode;
    /** Optional text displayed on the right side */
    textRight?: ReactNode;
    /** Icon displayed at the start of the navigation item */
    startIcon?: SvgSupportedIconProps['icon'] | SvgExternalIconProps['ExternalIcon'];
    /** Optional label for the start icon when used without text (for accessibility) */
    startIconLabel?: string;
    /** Custom class names for specific parts of the component */
    classes?: NavigationBarItemClasses;
    /** Click handler for the start icon button. If provided, icon becomes independently clickable */
    handleIconClick?: React.MouseEventHandler<HTMLButtonElement>;
    /** Click handler for the main navigation item */
    onClick?: React.MouseEventHandler<HTMLLIElement | HTMLAnchorElement>;
    /** If true, disables all interactions */
    disabled?: boolean;
    /** If true, applies active/selected styles */
    isActive?: boolean;
    /** Spacing level variant (0-2) for different indentation levels */
    spacing?: SpacingVariants;
    /** Visual variant of the navigation item */
    variant?: NavigationBarVariants;
    /** Additional left padding in pixels */
    leftIndent?: number;
    /** If true, hides the text and only shows icons */
    isIconButton?: boolean;
    /** Additional class names for the root element */
    className?: string;
    /** If provided, renders as a link with this href */
    link?: string;
    /** Tooltip configuration. Auto-generated for overflowing text if not provided */
    tooltipProps?: TooltipProps;
    /** Custom link component (e.g., Next.js Link, React Router Link) */
    LinkComponent?: React.ElementType;
    /** Context menu handler */
    onContextMenu?: (e: React.MouseEvent<HTMLAnchorElement | HTMLLIElement>) => void;
}
export declare const NavigationBarItem: React.ForwardRefExoticComponent<NavigationBarItemProps & React.RefAttributes<HTMLLIElement | HTMLAnchorElement>>;
export default NavigationBarItem;
