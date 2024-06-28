import React, { PropsWithChildren } from "react";
import { SvgExternalIconProps, SvgSupportedIconProps } from "./SvgIcon";
export interface ContextMenuProps {
    options: ContextMenuOption[] | ContextMenuOption[][];
    handleClick: (id: string) => void;
}
export type ContextMenuOption = {
    label: string;
    icon: SvgSupportedIconProps["icon"] | SvgExternalIconProps["ExternalIcon"];
    id: string;
    OverlayContent?: () => JSX.Element;
};
declare function ContextMenu(props: PropsWithChildren<ContextMenuProps>): React.JSX.Element | null;
export default ContextMenu;
