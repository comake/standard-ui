"use client";
// react-tooltip uses context. In next, import as a client-only file.
import React, { PropsWithChildren, ReactNode, useMemo } from "react";
import * as RxTooltip from "@radix-ui/react-tooltip";

type TooltipVariants = "primary" | "secondary";
export interface TooltipProps extends PropsWithChildren {
  content: string | ReactNode;
  variant?: TooltipVariants;
}

const variantClassMapping: Record<TooltipVariants, string> = {
  primary: "primary",
  secondary: "secondary",
};

export function Tooltip({
  content,
  children,
  variant = "primary",
}: TooltipProps) {
  const className = useMemo(
    () => ["tooltip", variantClassMapping[variant]].join(" "),
    [variant]
  );
  return (
    <RxTooltip.Provider>
      <RxTooltip.Root>
        <RxTooltip.Trigger>{children}</RxTooltip.Trigger>
        <RxTooltip.Portal>
          <RxTooltip.Content className={className} sideOffset={5}>
            {content}
          </RxTooltip.Content>
        </RxTooltip.Portal>
      </RxTooltip.Root>
    </RxTooltip.Provider>
  );
}

export default Tooltip;
