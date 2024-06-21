import React, { PropsWithChildren, ReactNode } from "react";
type TooltipVariants = "primary" | "secondary";
export interface TooltipProps extends PropsWithChildren {
    content: string | ReactNode;
    variant?: TooltipVariants;
}
export declare function Tooltip({ content, children, variant, }: TooltipProps): React.JSX.Element;
export default Tooltip;
