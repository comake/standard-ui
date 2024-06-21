import React from 'react';
import { SvgSupportedIconProps } from './SvgIcon';
import { NavigationBarItemProps } from './NavigationBarItem';
export interface NavigationBarItemWithDropDownProps extends NavigationBarItemProps {
    additionalOptions: OptionItem[][];
}
export declare function NavigationBarItemWithDropdown({ additionalOptions, ...navBarItemProps }: NavigationBarItemWithDropDownProps): React.JSX.Element;
export default NavigationBarItemWithDropdown;
interface OptionItem {
    label: string;
    icon: SvgSupportedIconProps['icon'];
    action?: (e: React.MouseEvent<HTMLLIElement>) => void;
    className?: string;
    OverlayContent?: () => JSX.Element;
}
