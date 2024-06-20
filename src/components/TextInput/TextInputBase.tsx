import React, { useCallback, HTMLProps } from 'react';
import SvgIcon, { SvgSupportedIconProps } from "../SvgIcon";
import { twMerge } from 'tailwind-merge';

type TextInputVariants = 'primary';

export interface TextInputBaseProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  variant?: TextInputVariants;
  onIconClick?: (e: React.MouseEvent<HTMLButtonElement>, icon: 'start' | 'end') => void;
  startIcon?: SvgSupportedIconProps['icon'];
  id?: string;
  endIcon?: SvgSupportedIconProps['icon'];
  className?: string;
  inputProps?: Omit<
    HTMLProps<HTMLInputElement>,
    'type' | 'onChange' | 'value' | 'placeholder'
  >;
  /* Restrict consumers from using this as a file or other input type. */
  type?: 'password' | 'number' | 'text' | 'date';
  value?: HTMLProps<HTMLInputElement>['value'];
  placeholder?: string;
  disabled?: boolean;
  iconButtonClassName?: string;
  isLoading?: boolean;
}

const variantToClassMapping: Record<TextInputVariants, string> = {
  primary: 'primary',
  // secondary: 'secondary horizontal-padding-secondary vertical-padding-secondary',
  // input: 'input px-2',
};

export function TextInputBase({
  iconButtonClassName,
  startIcon,
  variant = 'primary',
  onChange,
  id,
  endIcon,
  onIconClick,
  inputProps,
  className,
  disabled,
  value = '',
  type = 'text',
  isLoading = false,
  placeholder,
}: TextInputBaseProps) {
  const EndIcon = endIcon ? <SvgIcon className="icon" icon={endIcon} /> : null;
  const StartIcon = startIcon ? <SvgIcon className="icon" icon={startIcon} /> : null;

  const variantClassName = variantToClassMapping[variant];

  const handleEndIconClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onIconClick?.(e, 'end');
    },
    [onIconClick]
  );

  const handleStartIconClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onIconClick?.(e, 'start');
    },
    [onIconClick]
  );

  return (
    <div
      className={twMerge(
        'input flex items-center focus:pressed focus-within:pressed',
        variantClassName,
        endIcon ? 'icon-input' : '',
        className
      )}
      aria-disabled={disabled}
    >
      {onIconClick && !!StartIcon ? (
        <button
          onClick={handleStartIconClick}
          className={[
            'inline-flex items-center justify-center icon',
            iconButtonClassName ?? '',
          ].join(' ')}
          disabled={disabled}
        >
          {StartIcon}
        </button>
      ) : (
        StartIcon
      )}
      <input
        id={id}
        {...inputProps}
        placeholder={placeholder}
        type={type}
        className={twMerge(
          'w-full bg-inherit outline-none text-inherit',
          inputProps?.className
        )}
        disabled={disabled}
        onChange={onChange}
        value={value}
      />
      {isLoading ? (
        <div className="spinner-dark" />
      ) : onIconClick && !!EndIcon ? (
        <button
          onClick={handleEndIconClick}
          className={[
            'inline-flex items-center justify-center icon',
            iconButtonClassName ?? '',
          ].join(' ')}
          disabled={disabled}
        >
          {EndIcon}
        </button>
      ) : (
        EndIcon
      )}
    </div>
  );
}

export default TextInputBase;
