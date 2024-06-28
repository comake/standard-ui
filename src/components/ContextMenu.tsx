import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import React, { PropsWithChildren, useCallback, useState } from "react";
import NavigationBarItem from "./NavigationBarItem";
import { SearchableOptionsList } from "./SearchList";
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

function ContextMenu(props: PropsWithChildren<ContextMenuProps>) {
  const { options, handleClick, children } = props;
  const [actionItemOverlayContent, setActionItemOverlayContent] =
    useState<JSX.Element | null>(null);

  const handleSelect = useCallback(
    (e: React.MouseEvent, item: ContextMenuOption) => {
      if (item.OverlayContent) {
        setActionItemOverlayContent(item.OverlayContent());
      } else {
        handleClick(item.id);
      }
    },
    [handleClick]
  );

  const renderComponent = useCallback(
    (option: ContextMenuOption, onClick: (e: React.MouseEvent) => void) => {
      const item = (
        <NavigationBarItem
          classes={{
            startIcon: "mr-1",
          }}
          textLeft={option.label}
          startIcon={option.icon}
          key={option.id}
          onClick={onClick}
        />
      );

      if (!option.OverlayContent) {
        return <ContextMenuPrimitive.Item>{item}</ContextMenuPrimitive.Item>;
      }

      return item;
    },
    []
  );

  const cleanup = useCallback((open: boolean) => {
    if (!open) setActionItemOverlayContent(null);
  }, []);

  if (options.length === 0) return null;

  return (
    <ContextMenuPrimitive.Root onOpenChange={cleanup}>
      <ContextMenuPrimitive.Trigger>{children}</ContextMenuPrimitive.Trigger>
      <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Content className="min-w-[220px]">
          {actionItemOverlayContent ?? (
            <SearchableOptionsList<ContextMenuOption>
              items={options}
              filterByKey={"label"}
              renderComponent={renderComponent}
              handleSelect={handleSelect}
            />
          )}
        </ContextMenuPrimitive.Content>
      </ContextMenuPrimitive.Portal>
    </ContextMenuPrimitive.Root>
  );
}

export default ContextMenu;
