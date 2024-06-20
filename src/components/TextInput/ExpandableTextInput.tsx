import React, { useEffect, useCallback, useRef, useState } from 'react';
import TextInputBase, { TextInputBaseProps } from './TextInputBase';

export interface ExpandableTextInputProps extends TextInputBaseProps {
  onExpandChange?: (isExpanded: boolean) => void;
  expandedByDefault?: boolean;
}

export function ExpandableTextInput({
  onIconClick,
  className,
  onExpandChange,
  expandedByDefault = false,
  ...props
}: ExpandableTextInputProps) {
  const [isExpanded, setIsExpanded] = useState(expandedByDefault);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onExpandChange?.(isExpanded);
  }, [isExpanded, onExpandChange]);

  const handleExpand = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, pos: 'start' | 'end') => {
      if (pos === 'end') {
        setIsExpanded((curr) => !curr);
        inputRef.current?.focus();
      }
      onIconClick?.(e, pos);
    },
    [onIconClick]
  );
  const collapseInput = useCallback(() => {
    setIsExpanded(false);
  }, []);

  return (
    <TextInputBase
      {...props}
      onIconClick={handleExpand}
      className={[!isExpanded ? 'w-fit !min-h-0' : '', className].join(' ')}
      inputProps={{
        ...props.inputProps,
        ref: inputRef,
        className: [!isExpanded ? '!w-0' : '', props.inputProps?.className ?? ''].join(
          ' '
        ),
        onBlur: collapseInput,
      }}
    />
  );
}

export default ExpandableTextInput;
