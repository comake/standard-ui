import React from 'react';
import { TextInputBaseProps } from './TextInputBase';
import { ExpandableTextInputProps } from './ExpandableTextInput';
export interface TextInputProps extends TextInputBaseProps, ExpandableTextInputProps {
    isExpandable?: boolean;
}
export declare function TextInput({ isExpandable, ...props }: TextInputProps): React.JSX.Element;
export default TextInput;
