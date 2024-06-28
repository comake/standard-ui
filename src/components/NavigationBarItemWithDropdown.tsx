"use client";
import React from "react";
import NavigationBarItem, { NavigationBarItemProps } from "./NavigationBarItem";

import ContextMenu, { ContextMenuProps } from "./ContextMenu";

export interface NavigationBarItemWithDropDownProps
  extends NavigationBarItemProps,
    Omit<ContextMenuProps, "handleClick"> {
  handleContextMenuClick: ContextMenuProps["handleClick"];
}

function NavigationBarItemWithDropdown({
  handleContextMenuClick,
  options,
  ...navBarItemProps
}: NavigationBarItemWithDropDownProps) {
  return (
    <>
      <ContextMenu handleClick={handleContextMenuClick} options={options}>
        <NavigationBarItem {...navBarItemProps} />
      </ContextMenu>
    </>
  );
}

export default NavigationBarItemWithDropdown;
