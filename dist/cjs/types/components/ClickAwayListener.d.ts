import React, { HTMLProps } from 'react';
export interface ClickAwayListenerProps extends HTMLProps<HTMLDivElement> {
    onClickAway: () => void;
    className?: string;
}
export declare const ClickAwayListener: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<ClickAwayListenerProps>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default ClickAwayListener;
