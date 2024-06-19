import React, { PropsWithChildren } from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export function Button({
  children,
  ...others
}: PropsWithChildren<ButtonProps>) {
  return <button {...others}>{children}</button>;
}

export default Button;
