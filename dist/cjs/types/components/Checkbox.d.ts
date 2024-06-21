import React from 'react';
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
export declare function Checkbox({ label, name, isDisabled, onChange, isChecked, className, labelClassName, inputClassName, }: CheckboxProps): React.JSX.Element;
export default Checkbox;
