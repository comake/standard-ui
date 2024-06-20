import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface CheckboxProps {
  label: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  isChecked?: boolean;
  isDisabled?: boolean;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
}

export function Checkbox({
  label,
  name,
  isDisabled,
  onChange,
  isChecked,
  className,
  labelClassName,
  inputClassName,
}: CheckboxProps) {
  return (
    <div className={twMerge('flex checkbox primary items-center', className)}>
      <label className={labelClassName} htmlFor={name} aria-disabled={isDisabled}>
        {label}
      </label>
      <input
        id={name}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className={twMerge('icon', inputClassName)}
        disabled={isDisabled}
        name={name}
      />
    </div>
  );
}

export default Checkbox;
