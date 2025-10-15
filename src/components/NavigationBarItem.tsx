import React, { MutableRefObject, ReactNode, forwardRef, useEffect, useRef, useState } from 'react';
import SvgIcon, { SvgExternalIconProps, SvgIconProps, SvgSupportedIconProps } from './SvgIcon';
import Typography from './Typography';
import { twMerge } from 'tailwind-merge';
import { TooltipProps, Tooltip } from './Tooltip';

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

const spacingClassMapping = {
    '0': 'level-0',
    '1': 'level-1',
    '2': 'level-2',
} as const;

const variantClassMapping = {
    primary: 'primary',
    secondary: 'secondary',
} as const;

export const NavigationBarItem = forwardRef<HTMLLIElement | HTMLAnchorElement, NavigationBarItemProps>(
    (
        {
            classes,
            endIcon,
            leftIndent = 0,
            textLeft,
            variant = 'primary',
            textRight,
            startIcon,
            startIconLabel,
            onClick,
            isIconButton = false,
            disabled,
            spacing = 0,
            isActive,
            className: cn,
            link,
            onContextMenu,
            handleIconClick,
            tooltipProps,
            LinkComponent: Link = 'a',
        },
        ref
    ) => {
        const [_tooltipProps, setTooltipProps] = useState(tooltipProps);
        const localRef = useRef<HTMLAnchorElement | HTMLLIElement | null>(null);

        // Handle keyboard events for accessibility
        const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement | HTMLAnchorElement>) => {
            if (disabled) return;

            // Only handle keyboard events for non-link elements (links handle Enter/Space natively)
            if (!link && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                onClick?.(e as any);
            }
        };

        const spacingClassName = spacingClassMapping[spacing];
        const className = twMerge(
            'navigation-bar-item',
            'group',
            'flex justify-between items-center',
            variantClassMapping[variant],
            spacingClassName,
            'focus:selected',
            isActive ? 'selected' : '',
            disabled ? 'disabled cursor-not-allowed opacity-50 pointer-events-none' : '',
            cn
        );
        const startIconProps =
            startIcon &&
            ((typeof startIcon === 'string' ? { icon: startIcon } : { ExternalIcon: startIcon }) as SvgIconProps);
        const endIconProps =
            endIcon &&
            ((typeof endIcon === 'string' ? { icon: endIcon } : { ExternalIcon: endIcon }) as SvgIconProps);

        // Render start icon with or without independent click handler
        const StartIconElement = startIconProps && (
            handleIconClick ? (
                <button
                    type="button"
                    onClick={(e) => {
                        if (disabled) return;
                        e.stopPropagation();
                        handleIconClick(e);
                    }}
                    disabled={disabled}
                    className="flex items-center"
                    aria-label={startIconLabel || (typeof textLeft === 'string' ? textLeft : 'Icon button')}
                >
                    <SvgIcon {...startIconProps} className={twMerge('left icon', classes?.startIcon)} />
                </button>
            ) : (
                <SvgIcon {...startIconProps} className={twMerge('left icon', classes?.startIcon)} />
            )
        );

        const Content = (
            <>
                <div className={'flex items-center relative'}>
                    {StartIconElement}
                    {!isIconButton && (
                        <Typography
                            variant="caption2"
                            className={twMerge(
                                'left line-clamp-1 text-left',
                                'group-hover:brightness-125',
                                isActive ? 'brightness-125' : ''
                            )}
                        >
                            {textLeft}
                        </Typography>
                    )}
                </div>

                <div className="flex items-center">
                    {!!textRight && !isIconButton && (
                        <Typography
                            variant="caption2"
                            className={twMerge(
                                'right',
                                'group-hover:brightness-125',
                                isActive ? 'brightness-125' : ''
                            )}
                        >
                            {textRight}
                        </Typography>
                    )}
                    {!!endIconProps && (
                        <SvgIcon
                            {...endIconProps}
                            className={twMerge('ml-auto mr-0 right icon', classes?.endIcon)}
                        />
                    )}
                </div>
            </>
        );

        const style: React.CSSProperties = leftIndent > 0 ? { paddingLeft: `${leftIndent}px` } : {};

        // Combine refs properly
        const setRefs = (node: HTMLLIElement | HTMLAnchorElement | null) => {
            localRef.current = node;
            if (typeof ref === 'function') {
                ref(node);
            } else if (ref) {
                (ref as MutableRefObject<HTMLLIElement | HTMLAnchorElement | null>).current = node;
            }
        };

        const NavBarContent = link ? (
            <Link
                href={link}
                onClick={disabled ? undefined : onClick}
                className={className}
                style={style}
                ref={setRefs}
                aria-disabled={disabled}
                aria-current={isActive ? 'page' : undefined}
                onContextMenu={onContextMenu}
                tabIndex={disabled ? -1 : undefined}
            >
                {Content}
            </Link>
        ) : (
            <li
                onClick={disabled ? undefined : onClick}
                onKeyDown={handleKeyDown}
                className={className}
                role="button"
                style={style}
                ref={setRefs}
                tabIndex={disabled ? -1 : 0}
                onContextMenu={onContextMenu}
                aria-disabled={disabled}
                aria-current={isActive ? 'page' : undefined}
            >
                {Content}
            </li>
        );

        // Check for text overflow and auto-enable tooltip
        useEffect(() => {
            if (tooltipProps || !localRef.current) return;

            // Use a small delay to ensure rendering is complete
            const timeoutId = setTimeout(() => {
                if (!localRef.current) return;

                // Check if text is truncated by examining the text element specifically
                const textElement = localRef.current.querySelector('.left.line-clamp-1');
                if (textElement) {
                    const isOverflowing = textElement.scrollWidth > textElement.clientWidth;
                    if (isOverflowing && !_tooltipProps) {
                        setTooltipProps({
                            content: textLeft,
                        });
                    }
                }
            }, 0);

            return () => clearTimeout(timeoutId);
        }, [textLeft, tooltipProps, _tooltipProps]);

        if (_tooltipProps) {
            return <Tooltip {..._tooltipProps}>{NavBarContent}</Tooltip>;
        }
        return NavBarContent;
    }
);

NavigationBarItem.displayName = 'NavigationBarItem';

export default NavigationBarItem;
