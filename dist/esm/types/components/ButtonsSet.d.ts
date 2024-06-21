import { type FC } from 'react';
import { ButtonProps } from './Button';
export interface ButtonsSetProps {
    buttons: ButtonProps[];
    className?: string;
}
export declare const ButtonsSet: FC<ButtonsSetProps>;
export default ButtonsSet;
