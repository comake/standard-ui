import React, { HTMLProps, MutableRefObject, PropsWithChildren } from 'react';
export type TypographyElements = HTMLHeadingElement | HTMLSpanElement | HTMLParagraphElement;
export type TypographyVariants = 'display-large' | 'display-medium' | 'display-small' | 'display-x-small' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1' | 'b2' | 'caption1' | 'caption2';
export interface TypographyProps extends PropsWithChildren, Pick<HTMLProps<HTMLParagraphElement>, 'tabIndex' | 'onClick'> {
    variant?: TypographyVariants;
    className?: string;
    dangerouslySetInnerHTML?: string;
    id?: string;
    componentRef?: MutableRefObject<HTMLHeadingElement | null> | MutableRefObject<HTMLSpanElement | null> | MutableRefObject<HTMLParagraphElement | null>;
}
export declare function Typography({ variant, className: cn, children, dangerouslySetInnerHTML, id, componentRef, ...nativeProps }: TypographyProps): React.JSX.Element;
export default Typography;
