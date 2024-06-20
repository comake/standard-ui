import React, { useCallback, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import {
  SearchableOptionsList,
  SearchableOptionsListProps,
} from './SearchableOptionsList';
import { twJoin } from 'tailwind-merge';

export interface SearchListLocalPopupProps<T> extends SearchableOptionsListProps<T> {
  children: React.ReactNode;
  buttonClassName?: string;
  variant?: 'button-like' | 'plain';
}

export function SearchListLocalPopup<T>(props: SearchListLocalPopupProps<T>) {
  const {
    children,
    buttonClassName,
    handleSelect,
    variant = 'plain',
    ...searchListLocalProps
  } = props;
  const [open, setOpen] = useState(false);

  const openPopover = useCallback(() => {
    setOpen(true);
  }, []);

  const closePopover = useCallback(() => {
    setOpen(false);
  }, []);

  const handleItemSelect = useCallback(
    (e: React.MouseEvent, item: T) => {
      handleSelect(e, item);
      closePopover();
    },
    [closePopover, handleSelect]
  );

  return (
    <Popover.Root open={open}>
      <Popover.Trigger asChild>
        <div
          role="button"
          onClick={openPopover}
          className={twJoin(
            buttonClassName,
            variant === 'button-like'
              ? 'relative inline-flex items-center button secondary'
              : undefined
          )}
        >
          {children}
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          onFocusOutside={closePopover}
          onInteractOutside={closePopover}
          className={
            'bg-base rounded-core-border-radius-50 border border-[#ccc] overflow-clip shadow-system-blurryShadow-lg'
          }
          sideOffset={5}
          align="start"
        >
          <SearchableOptionsList
            {...searchListLocalProps}
            handleSelect={handleItemSelect}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
