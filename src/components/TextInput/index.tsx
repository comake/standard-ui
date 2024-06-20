import React from 'react';
import TextInputBase, { TextInputBaseProps } from './TextInputBase';
import ExpandableTextInput, { ExpandableTextInputProps } from './ExpandableTextInput';

export interface TextInputProps extends TextInputBaseProps, ExpandableTextInputProps {
  isExpandable?: boolean;
}

export function TextInput({ isExpandable, ...props }: TextInputProps) {
  return isExpandable ? <ExpandableTextInput {...props} /> : <TextInputBase {...props} />;
}

export default TextInput;
