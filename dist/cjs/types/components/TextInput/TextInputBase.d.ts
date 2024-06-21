import React, { HTMLProps } from 'react';
import { SvgSupportedIconProps } from "../SvgIcon";
type TextInputVariants = 'primary';
export interface TextInputBaseProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    variant?: TextInputVariants;
    onIconClick?: (e: React.MouseEvent<HTMLButtonElement>, icon: 'start' | 'end') => void;
    startIcon?: SvgSupportedIconProps['icon'];
    id?: string;
    endIcon?: SvgSupportedIconProps['icon'];
    className?: string;
    inputProps?: Omit<HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'value' | 'placeholder'>;
    type?: 'password' | 'number' | 'text' | 'date';
    value?: HTMLProps<HTMLInputElement>['value'];
    placeholder?: string;
    disabled?: boolean;
    iconButtonClassName?: string;
    isLoading?: boolean;
}
export declare function TextInputBase({ iconButtonClassName, startIcon, variant, onChange, id, endIcon, onIconClick, inputProps, className, disabled, value, type, isLoading, placeholder, }: TextInputBaseProps): React.JSX.Element;
export default TextInputBase;
