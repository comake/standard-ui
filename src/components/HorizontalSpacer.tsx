import React, { useMemo } from 'react';

type HorizontalSpacerSize =
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

interface HorizontalSpacerProps {
  size: HorizontalSpacerSize;
  isFlexChild?: boolean;
}
const spacerSizeClassMapping: Record<HorizontalSpacerSize, string> = {
  xxxxs: 'w-system-horizontal-spacers-xxxxs',
  xxxs: 'w-system-horizontal-spacers-xxxs',
  xxs: 'w-system-horizontal-spacers-xxs',
  xs: 'w-system-horizontal-spacers-xs',
  s: 'w-system-horizontal-spacers-s',
  m: 'w-system-horizontal-spacers-m',
  l: 'w-system-horizontal-spacers-l',
  xl: 'w-system-horizontal-spacers-xl',
  xxl: 'w-system-horizontal-spacers-xxl',
  xxxl: 'w-system-horizontal-spacers-xxxl',
  xxxxl: 'w-system-horizontal-spacers-xxxxl',
};

const spacerSizeClassMappingFlex: Record<HorizontalSpacerSize, string> = {
  xxxxs: 'min-w-system-horizontal-spacers-xxxxs',
  xxxs: 'min-w-system-horizontal-spacers-xxxs',
  xxs: 'min-w-system-horizontal-spacers-xxs',
  xs: 'min-w-system-horizontal-spacers-xs',
  s: 'min-w-system-horizontal-spacers-s',
  m: 'min-w-system-horizontal-spacers-m',
  l: 'min-w-system-horizontal-spacers-l',
  xl: 'min-w-system-horizontal-spacers-xl',
  xxl: 'min-w-system-horizontal-spacers-xxl',
  xxxl: 'min-w-system-horizontal-spacers-xxxl',
  xxxxl: 'min-w-system-horizontal-spacers-xxxxl',
};

export function HorizontalSpacer({ size, isFlexChild }: HorizontalSpacerProps) {
  const className: string = useMemo(
    () =>
      [
        spacerSizeClassMapping[size],
        isFlexChild ? `${spacerSizeClassMappingFlex[size]}` : '',
      ].join(' '),
    [isFlexChild, size]
  );

  return <div className={className} />;
}

export default HorizontalSpacer;
