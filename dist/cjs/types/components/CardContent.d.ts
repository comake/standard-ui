import React, { ReactNode } from 'react';
import { SvgSupportedIconProps } from './SvgIcon';
export type CardContentVariants = 'icon' | 'large-title-right-align' | 'large-title-left-align' | 'simple-long-description' | 'with-additional-content';
export interface CardContentProps {
    title?: ReactNode;
    subtitle?: ReactNode;
    description?: ReactNode;
    icon?: SvgSupportedIconProps['icon'];
    variant: CardContentVariants;
    isLoading?: boolean;
    additionalContent?: ReactNode;
    className?: string;
    classes?: {
        topSectionClassName?: string;
        titleClassName?: string;
        subtitleClassName?: string;
        descriptionClassName?: string;
    };
}
export declare function CardContent({ title, subtitle, variant: v, description, icon, isLoading, additionalContent, classes, className: rootClassName, }: CardContentProps): React.JSX.Element;
export default CardContent;
