import React, {
  type PropsWithChildren,
  useLayoutEffect,
  useRef,
  useCallback,
  HTMLProps,
  forwardRef,
  MutableRefObject,
} from 'react';

export interface ClickAwayListenerProps extends HTMLProps<HTMLDivElement> {
  onClickAway: () => void;
  className?: string;
}
export const ClickAwayListener = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ClickAwayListenerProps>
>(({ onClickAway, children, className }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const _ref = (ref ?? containerRef) as MutableRefObject<HTMLDivElement | null>;
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (_ref.current && !_ref.current.contains(event.target as Node)) {
        onClickAway();
      }
    },
    [_ref, onClickAway]
  );

  useLayoutEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div ref={_ref} className={className}>
      {children}
    </div>
  );
});

ClickAwayListener.displayName = 'ClickAwayListener';

export default ClickAwayListener;
