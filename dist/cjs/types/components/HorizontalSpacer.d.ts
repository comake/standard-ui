import React from 'react';
type HorizontalSpacerSize = 'xxxxs' | 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl';
interface HorizontalSpacerProps {
    size: HorizontalSpacerSize;
    isFlexChild?: boolean;
}
export declare function HorizontalSpacer({ size, isFlexChild }: HorizontalSpacerProps): React.JSX.Element;
export default HorizontalSpacer;
