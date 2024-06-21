import React from 'react';
export type VerticalSpacerSize = 'xxxxs' | 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl';
interface VerticalSpacerProps {
    size: VerticalSpacerSize;
    isFlexChild?: boolean;
}
export declare function VerticalSpacer({ size, isFlexChild }: VerticalSpacerProps): React.JSX.Element;
export default VerticalSpacer;
