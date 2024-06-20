import React, {
  PropsWithChildren,
  HTMLProps,
  forwardRef,
  useMemo,
  RefObject,
} from "react";
import { SvgSupportedIconProps } from "./SvgIcon";
import { twMerge } from "tailwind-merge";
import SvgIcon from "./SvgIcon";
import Tooltip, { TooltipProps } from "./Tooltip";

type ButtonVariants = "primary" | "secondary" | "link";
type ButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => void;
type AnchorClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => void;
export interface ButtonProps
  extends PropsWithChildren<
    Pick<
      HTMLProps<HTMLButtonElement>,
      "className" | "disabled" | "title" | "id"
    >
  > {
  tooltipProps?: TooltipProps;
  type?: "submit";
  onClick?: ButtonClickHandler | AnchorClickHandler;
  colorVariant?: "red" | "green";
  variant?: ButtonVariants;
  startIcon?: SvgSupportedIconProps["icon"];
  startIconClass?: string;
  endIcon?: SvgSupportedIconProps["icon"];
  endIconClass?: string;
  isIconButton?: boolean;
  link?: string;
  isExternal?: boolean;
  badge?: string;
  LinkComponent?: React.ElementType;
}

const classMapping: Record<ButtonVariants, string> = {
  primary: "primary",
  secondary: "secondary",
  link: "link",
};

// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      type,
      colorVariant,
      startIcon,
      children,
      endIcon,
      className: cn,
      onClick,
      endIconClass,
      startIconClass,
      disabled,
      isIconButton,
      variant = "secondary",
      link,
      isExternal,
      badge,
      title,
      tooltipProps,
      LinkComponent: Link = "a",
      ...nativeProps
    },
    ref
  ) => {
    const _variant = link ? "link" : variant;
    const variantClasses = classMapping[_variant];
    const className = useMemo(
      () =>
        twMerge(
          "relative button inline-flex items-center justify-center cursor-pointer",
          isIconButton || (!children && [startIcon, endIcon].some(Boolean))
            ? /*  If button is declared as iconButton or either icon is defined 
            and children is undefined, treat as icon button */
              "vertical-padding-icon-button horizontal-padding-icon-button"
            : "",
          colorVariant,
          startIcon || endIcon ? `${variant}-icon` : "",
          variantClasses,
          cn
        ),
      [
        children,
        cn,
        colorVariant,
        endIcon,
        isIconButton,
        startIcon,
        variant,
        variantClasses,
      ]
    );
    const content = useMemo(
      () => (
        <>
          {startIcon && (
            <SvgIcon
              className={twMerge(startIconClass, "icon")}
              icon={startIcon}
            />
          )}

          {children}
          {endIcon && (
            <SvgIcon icon={endIcon} className={twMerge(endIconClass, "icon")} />
          )}
        </>
      ),
      [children, endIcon, endIconClass, startIcon, startIconClass]
    );
    const ButtonContent = useMemo(() => {
      if (!link)
        return (
          <button
            {...nativeProps}
            title={title}
            ref={ref as RefObject<HTMLButtonElement>}
            disabled={disabled}
            onClick={onClick as ButtonClickHandler}
            className={className}
            type={type}
          >
            {content}
            {/* FIXME: need to refactor badge */}
            {badge !== undefined && (
              // eslint-disable-next-line
              <span className="absolute -right-[12px] -bottom-[12px] bg-brand-base-colors-primary-500 text-text-base-base-100 rounded-full w-6 h-6 text-xs flex items-center justify-center">
                {badge}
              </span>
            )}
          </button>
        );
      if (isExternal)
        return (
          <a
            {...nativeProps}
            title={title}
            ref={ref as RefObject<HTMLAnchorElement>}
            onClick={onClick as AnchorClickHandler}
            className={className}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {content}
          </a>
        );

      return (
        <Link
          {...nativeProps}
          title={title}
          ref={ref as RefObject<HTMLAnchorElement>}
          onClick={onClick as AnchorClickHandler}
          className={className}
          href={link}
        >
          {content}
        </Link>
      );
    }, [
      badge,
      className,
      content,
      disabled,
      isExternal,
      link,
      nativeProps,
      onClick,
      ref,
      title,
      type,
    ]);

    if (tooltipProps) {
      <Tooltip {...tooltipProps}>{ButtonContent}</Tooltip>;
    }

    return ButtonContent;
  }
);

export default Button;
