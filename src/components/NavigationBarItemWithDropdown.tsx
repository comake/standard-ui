import React, { useCallback, useRef, useState } from 'react';
import { SvgSupportedIconProps }from './SvgIcon';
import * as Popover from '@radix-ui/react-popover';
import NavigationBarItem, { NavigationBarItemProps } from './NavigationBarItem';
import {
  SearchableOptionsList,
  SearchableOptionsListProps,
} from './SearchList/SearchableOptionsList';

export interface NavigationBarItemWithDropDownProps extends NavigationBarItemProps {
  additionalOptions: OptionItem[][];
}

export function NavigationBarItemWithDropdown({
  additionalOptions,
  ...navBarItemProps
}: NavigationBarItemWithDropDownProps) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const [actionItemOverlayContent, setActionItemOverlayContent] =
    useState<JSX.Element | null>(null);

  const anchorRef = useRef<HTMLAnchorElement | HTMLLIElement | null>(null);
  const handleRightClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement | HTMLLIElement>) => {
      e.preventDefault();
      anchorRef.current = e.currentTarget;
      setIsDropDownOpen(true);
    },
    []
  );

  const closeMenu = useCallback(() => {
    setIsDropDownOpen(false);
    setActionItemOverlayContent(null);
  }, []);

  const handleSelect = useCallback(
    (e: React.MouseEvent, item: OptionItem) => {
      if (item.OverlayContent) {
        setActionItemOverlayContent(item.OverlayContent());
      } else {
        item.action?.(e as React.MouseEvent<HTMLLIElement>);
        closeMenu();
      }
    },
    [closeMenu]
  );

  const renderOptionItem: SearchableOptionsListProps<OptionItem>['renderComponent'] =
    useCallback(({ label, icon }, onClick) => {
      return <NavigationBarItem textLeft={label} startIcon={icon} onClick={onClick} />;
    }, []);

  const handleDropdownOpenToggle = useCallback(
    (isOpen: boolean) => {
      setIsDropDownOpen(isOpen);
      if (!isOpen) {
        closeMenu();
      }
    },
    [closeMenu]
  );

  return (
    <>
      <NavigationBarItem {...navBarItemProps} onContextMenu={handleRightClick} />

      <Popover.Root open={isDropDownOpen} onOpenChange={handleDropdownOpenToggle}>
        <Popover.Anchor virtualRef={anchorRef} />
        <Popover.Portal>
          <Popover.Content side="bottom">
            {actionItemOverlayContent ?? (
              <SearchableOptionsList<OptionItem>
                items={additionalOptions}
                filterByKey={'label'}
                renderComponent={renderOptionItem}
                handleSelect={handleSelect}
              />
            )}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}

export default NavigationBarItemWithDropdown;

interface OptionItem {
  label: string;
  icon: SvgSupportedIconProps['icon'];
  action?: (e: React.MouseEvent<HTMLLIElement>) => void;
  className?: string;
  OverlayContent?: () => JSX.Element;
}
