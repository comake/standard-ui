import React, { PropsWithChildren, HTMLProps } from "react";
import { SvgSupportedIconProps, SvgExternalIconProps } from "./SvgIcon";
import { TooltipProps } from "./Tooltip";
type ButtonVariants = "primary" | "secondary" | "link";
type ButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => void;
type AnchorClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => void;
export interface ButtonProps extends PropsWithChildren<Pick<HTMLProps<HTMLButtonElement>, "className" | "disabled" | "title" | "id">> {
    tooltipProps?: TooltipProps;
    type?: "submit";
    onClick?: ButtonClickHandler | AnchorClickHandler;
    colorVariant?: "red" | "green";
    variant?: ButtonVariants;
    startIcon?: SvgSupportedIconProps["icon"] | SvgExternalIconProps["ExternalIcon"];
    startIconClass?: string;
    endIcon?: SvgSupportedIconProps["icon"] | SvgExternalIconProps["ExternalIcon"];
    endIconClass?: string;
    isIconButton?: boolean;
    link?: string;
    isExternal?: boolean;
    badge?: string;
    LinkComponent?: React.ElementType;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;
export default Button;
