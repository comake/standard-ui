import React from "react";
import { SvgSupportedIconProps } from "./SvgIcon";
export interface SelectOption<Value extends string | number> {
    label: string;
    iconUrl?: string;
    value: Value;
}
export type SelectVariants = "primary" | "secondary";
export interface SelectBaseProps<Value extends string> {
    options: SelectOption<Value>[];
    multiple?: boolean;
    ariaLabel?: string;
    fullWidth?: boolean;
    classes?: {
        button?: string;
    };
    showIconInOptions?: boolean;
    variant?: SelectVariants;
    disabled?: boolean;
    icon?: SvgSupportedIconProps["icon"];
    arrowIcon?: SvgSupportedIconProps["icon"];
    className?: string;
}
type SingleSelectOnChangeHandler<Value extends string> = (value: Value) => void;
export interface SelectSingleProps<Value extends string> extends SelectBaseProps<Value> {
    value?: Value;
    onChange?: SingleSelectOnChangeHandler<Value>;
}
type MultiSelectOnChangeHandler<Value extends string> = (value: Value[]) => void;
export interface SelectMultipleProps<Value extends string> extends SelectBaseProps<Value> {
    multiple: true;
    value?: Value[];
    onChange?: MultiSelectOnChangeHandler<Value>;
}
export type SelectProps<Value extends string> = SelectSingleProps<Value> | SelectMultipleProps<Value>;
export declare function Select<Value extends string>({ options, ariaLabel, value, onChange, multiple, fullWidth, variant, classes, disabled, icon, showIconInOptions, className, }: SelectProps<Value>): React.JSX.Element;
export default Select;
