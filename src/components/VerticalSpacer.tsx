import React, { useMemo } from 'react';

export type VerticalSpacerSize =
  | 'xxxxs'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'xxxxl';

interface VerticalSpacerProps {
  size: VerticalSpacerSize;
  isFlexChild?: boolean;
}

const spacerSizeClassMapping: Record<VerticalSpacerSize, string> = {
  xxxxs: 'h-system-vertical-spacers-xxxxs',
  xxxs: 'h-system-vertical-spacers-xxxs',
  xxs: 'h-system-vertical-spacers-xxs',
  xs: 'h-system-vertical-spacers-xs',
  s: 'h-system-vertical-spacers-s',
  m: 'h-system-vertical-spacers-m',
  l: 'h-system-vertical-spacers-l',
  xl: 'h-system-vertical-spacers-xl',
  xxl: 'h-system-vertical-spacers-xxl',
  xxxl: 'h-system-vertical-spacers-xxxl',
  xxxxl: 'h-system-vertical-spacers-xxxxl',
};

export function VerticalSpacer({ size, isFlexChild }: VerticalSpacerProps) {
  const className: string = useMemo(
    () => [spacerSizeClassMapping[size], isFlexChild ? 'flex-1' : ''].join(' '),
    [isFlexChild, size]
  );

  return <div className={className} />;
}

export default VerticalSpacer;
