import React from "react";
import { SvgSupportedIconProps } from "./SvgIcon";
type SizeVariants = "small" | "large";
type TabVariants = "primary" | "secondary";
export type Router = {
    push: (link: string) => unknown | Promise<unknown>;
    [key: string | number]: unknown;
};
export interface TabButtonBaseProps {
    label: string;
    isActive?: boolean;
    size?: SizeVariants;
    variant?: TabVariants;
    icon?: SvgSupportedIconProps["icon"];
    className?: string;
    onContextMenu?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
    LinkComponent?: React.ElementType;
    router?: Router;
}
export interface TabLinkButtonProps extends TabButtonBaseProps {
    link: string;
}
export interface TabButtonProps<T = string> extends TabButtonBaseProps {
    value: T;
    onClick: (id: T) => void | Promise<void>;
}
export declare function TabButton<T>({ label, isActive, size, variant, icon, className: cn, router, LinkComponent: Link, ...differentiatorProps }: TabButtonProps<T> | TabLinkButtonProps): React.JSX.Element;
export default TabButton;
