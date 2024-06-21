import React from 'react';
import { SvgSupportedIconProps } from './SvgIcon';
interface TagProps {
    variant: string;
    label: string;
    icon?: SvgSupportedIconProps['icon'];
}
export declare function Tag({ label, variant, icon }: TagProps): React.JSX.Element;
export default Tag;
