import React, { HTMLProps, MutableRefObject, PropsWithChildren, useMemo } from 'react';

export type TypographyElements =
  | HTMLHeadingElement
  | HTMLSpanElement
  | HTMLParagraphElement;

export type TypographyVariants =
  | 'display-large'
  | 'display-medium'
  | 'display-small'
  | 'display-x-small'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'b1'
  | 'b2'
  | 'caption1'
  | 'caption2';

export interface TypographyProps
  extends PropsWithChildren,
    Pick<HTMLProps<HTMLParagraphElement>, 'tabIndex' | 'onClick'> {
  variant?: TypographyVariants;
  className?: string;
  dangerouslySetInnerHTML?: string;
  id?: string;
  componentRef?:
    | MutableRefObject<HTMLHeadingElement | null>
    | MutableRefObject<HTMLSpanElement | null>
    | MutableRefObject<HTMLParagraphElement | null>;
}

const variantClassMapping: Record<TypographyVariants, string> = {
  'display-large': 'display-large',
  'display-medium': 'display-medium',
  'display-small': 'display-small',
  'display-x-small': 'display-x-small',
  h1: 'headings-xx-large',
  h2: 'headings-x-large',
  h3: 'headings-large',
  h4: 'headings-medium',
  h5: 'headings-small',
  h6: 'headings-x-small',
  b1: 'labels-large',
  b2: 'labels-medium',
  caption1: 'labels-small',
  caption2: 'labels-x-small',
};

export function Typography({
  variant = 'b2',
  className: cn = '',
  children,
  dangerouslySetInnerHTML,
  id,
  componentRef,
  ...nativeProps
}: TypographyProps) {
  const className = useMemo(
    () => `${variantClassMapping[variant]} ${cn} component-typography`,
    [variant, cn]
  );
  if (variant.startsWith('h')) {
    if (dangerouslySetInnerHTML)
      return React.createElement(variant, {
        className,
        id,
        ref: componentRef,
        dangerouslySetInnerHTML: dangerouslySetInnerHTML
          ? { __html: dangerouslySetInnerHTML }
          : undefined,
        ...nativeProps,
      });
    return React.createElement(
      variant,
      {
        id,
        className,
        ref: componentRef,
        ...nativeProps,
      },
      children
    );
  }

  if (variant.startsWith('b')) {
    return (
      <p
        {...nativeProps}
        ref={componentRef as MutableRefObject<HTMLParagraphElement>}
        className={className}
        dangerouslySetInnerHTML={
          dangerouslySetInnerHTML ? { __html: dangerouslySetInnerHTML } : undefined
        }
        id={id}
      >
        {children}
      </p>
    );
  }

  return (
    <span
      {...nativeProps}
      ref={componentRef}
      id={id}
      className={className}
      dangerouslySetInnerHTML={
        dangerouslySetInnerHTML ? { __html: dangerouslySetInnerHTML } : undefined
      }
    >
      {children}
    </span>
  );
}

export default Typography;
