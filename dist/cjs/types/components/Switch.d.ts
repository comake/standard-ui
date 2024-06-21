import React from 'react';
import { SvgSupportedIconProps } from './SvgIcon';
export interface SwitchConfig {
    id: string;
    label: string;
    icon: SvgSupportedIconProps['icon'];
}
export interface SwitchProps {
    orientation?: 'vertical' | 'horizontal';
    configList: SwitchConfig[];
    onChange: (id: SwitchConfig['id']) => void;
    activeId: string;
}
export declare function Switch({ orientation, configList, onChange, activeId, }: SwitchProps): React.JSX.Element;
export default Switch;
type RoundedSides = 'left' | 'right' | 'top' | 'bottom';
interface SwitchButtonProps extends SwitchConfig, Pick<SwitchProps, 'onChange'> {
    isActive: boolean;
    roundSide?: RoundedSides;
}
export declare function SwitchButton({ id, label, icon, onChange, isActive, roundSide, }: SwitchButtonProps): React.JSX.Element;
