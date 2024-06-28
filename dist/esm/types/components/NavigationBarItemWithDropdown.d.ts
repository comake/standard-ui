import React from "react";
import { NavigationBarItemProps } from "./NavigationBarItem";
import { ContextMenuProps } from "./ContextMenu";
export interface NavigationBarItemWithDropDownProps extends NavigationBarItemProps, Omit<ContextMenuProps, "handleClick"> {
    handleContextMenuClick: ContextMenuProps["handleClick"];
}
declare function NavigationBarItemWithDropdown({ handleContextMenuClick, options, ...navBarItemProps }: NavigationBarItemWithDropDownProps): React.JSX.Element;
export default NavigationBarItemWithDropdown;
