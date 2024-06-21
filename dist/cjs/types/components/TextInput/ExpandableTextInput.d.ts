import React from 'react';
import { TextInputBaseProps } from './TextInputBase';
export interface ExpandableTextInputProps extends TextInputBaseProps {
    onExpandChange?: (isExpanded: boolean) => void;
    expandedByDefault?: boolean;
}
export declare function ExpandableTextInput({ onIconClick, className, onExpandChange, expandedByDefault, ...props }: ExpandableTextInputProps): React.JSX.Element;
export default ExpandableTextInput;
