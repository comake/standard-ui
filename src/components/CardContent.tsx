import React, { ReactNode, useMemo } from 'react';
import SvgIcon, { SvgSupportedIconProps }from './SvgIcon';
import Typography from './Typography';
import { twMerge } from 'tailwind-merge';

export type CardContentVariants =
  | 'icon'
  | 'large-title-right-align'
  | 'large-title-left-align'
  | 'simple-long-description'
  | 'with-additional-content';

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

const variantClassMapping: Record<CardContentVariants, string> = {
  'large-title-left-align': 'large-title-left-align',
  'large-title-right-align': 'large-title-right-align',
  'simple-long-description': 'simple-long-description',
  'with-additional-content': 'with-additional-content',
  icon: 'icon',
};

export function CardContent({
  title,
  subtitle,
  variant: v,
  description,
  icon,
  isLoading,
  additionalContent,
  classes,
  className: rootClassName,
}: CardContentProps) {
  const variant: CardContentVariants = useMemo(() => {
    if (icon) return 'icon';
    if (additionalContent) return 'with-additional-content';
    return v;
  }, [additionalContent, icon, v]);

  const className = useMemo(
    () =>
      `flex flex-col gap-core-dimension-25 py-2 px-4 w-fit ${variantClassMapping[variant]}`,
    [variant]
  );

  const subtitleContent = useMemo(
    () =>
      isLoading ? (
        <div className="h-1.5 w-[75%] rounded-system-radius-md bg-slate-300" />
      ) : (
        subtitle
      ),
    [isLoading, subtitle]
  );

  const titleContent = useMemo(
    () =>
      isLoading ? (
        <div className="h-1.5 w-[90%] rounded-system-radius-md bg-slate-400" />
      ) : (
        title
      ),
    [isLoading, title]
  );

  const descriptionContent = useMemo(
    () =>
      isLoading ? (
        <div className="h-1.5 w-[80%] rounded-system-radius-md bg-slate-300" />
      ) : (
        description
      ),
    [description, isLoading]
  );

  const topSectionClassName = useMemo(
    () =>
      [
        variant === 'simple-long-description'
          ? 'flex flex-wrap flex-row-reverse justify-between items-center'
          : 'flex flex-col gap-core-dimension-25',
        classes?.topSectionClassName,
      ].join(' '),
    [classes?.topSectionClassName, variant]
  );

  const content = useMemo(() => {
    if (icon && variant === 'icon') {
      return (
        <>
          <SvgIcon icon={icon} />
          {descriptionContent}
        </>
      );
    } else {
      return (
        <>
          <div className={topSectionClassName}>
            <Typography
              className={twMerge('block', classes?.subtitleClassName)}
              variant="caption2"
            >
              {subtitleContent}
            </Typography>
            <Typography
              className={twMerge('block !font-bold', classes?.titleClassName)}
              variant="b1"
            >
              {titleContent}
            </Typography>
          </div>
          <Typography
            variant="caption1"
            className={twMerge('block', classes?.descriptionClassName)}
          >
            {descriptionContent}
          </Typography>
          {additionalContent}
        </>
      );
    }
  }, [
    additionalContent,
    descriptionContent,
    icon,
    subtitleContent,
    titleContent,
    topSectionClassName,
    variant,
    classes,
  ]);

  return <div className={twMerge(className, rootClassName)}>{content}</div>;
}

export default CardContent;
