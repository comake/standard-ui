("");
import React, {
  MutableRefObject,
  ReactNode,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import SvgIcon, {
  SvgExternalIconProps,
  SvgIconProps,
  SvgSupportedIconProps,
} from "./SvgIcon";
import Typography from "./Typography";
import { twMerge } from "tailwind-merge";
import { TooltipProps, Tooltip } from "./Tooltip";

type SpacingVariants = 0 | 1 | 2;
type NavigationBarVariants = "primary" | "secondary";

export interface NavigationBarItemClasses {
  root?: string;
  textLeft?: string;
  textRight?: string;
  startIcon?: string;
  endIcon?: string;
}

export interface NavigationBarItemProps {
  endIcon?:
    | SvgSupportedIconProps["icon"]
    | SvgExternalIconProps["ExternalIcon"];
  textLeft: ReactNode;
  textRight?: ReactNode;
  startIcon?:
    | SvgSupportedIconProps["icon"]
    | SvgExternalIconProps["ExternalIcon"];
  classes?: NavigationBarItemClasses;
  handleIconClick?: React.MouseEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLLIElement | HTMLAnchorElement>;
  disabled?: boolean;
  isActive?: boolean;
  spacing?: SpacingVariants;
  variant?: NavigationBarVariants;
  leftIndent?: number;
  className?: string;
  link?: string;
  tooltipProps?: TooltipProps;
  LinkComponent?: React.ElementType;
  onContextMenu?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLLIElement>
  ) => void;
}

const spacingClassMapping: Record<SpacingVariants, string> = {
  "0": "level-0",
  "1": "level-1",
  "2": "level-2",
};

const variantClassMapping: Record<NavigationBarVariants, string> = {
  primary: "primary",
  secondary: "secondary",
};

export const NavigationBarItem = forwardRef<
  HTMLLIElement | HTMLAnchorElement,
  NavigationBarItemProps
>(
  (
    {
      classes,
      endIcon,
      leftIndent = 0,
      textLeft,
      variant = "primary",
      textRight,
      startIcon,
      onClick,
      disabled,
      spacing = 0,
      isActive,
      className: cn,
      link,
      onContextMenu,
      handleIconClick,
      tooltipProps,
      LinkComponent: Link = "a",
    },
    ref
  ) => {
    const [_tooltipProps, setTooltipProps] = useState(tooltipProps);
    const localRef = useRef<HTMLAnchorElement | HTMLLIElement | null>(null);
    const _ref = (ref ?? localRef) as MutableRefObject<
      HTMLAnchorElement | HTMLLIElement
    >;

    const spacingClassName = useMemo(
      () => spacingClassMapping[spacing],
      [spacing]
    );
    const className = useMemo(
      () =>
        [
          cn ?? "",
          "navigation-bar-item primary",
          "flex justify-between items-center",
          variantClassMapping[variant],
          spacingClassName,
          "focus:selected",
          isActive ? "selected" : "",
          "data-[disabled]:disabled data-[disabled]:hover:bg-transparent data-[disabled]:cursor-not-allowed",
        ].join(" "),
      [cn, isActive, spacingClassName, variant]
    );
    const Content = useMemo(() => {
      const startIconProps =
        startIcon &&
        ((typeof startIcon === "string"
          ? { icon: startIcon }
          : { ExternalIcon: startIcon }) as SvgIconProps);
      const endIconProps =
        endIcon &&
        ((typeof endIcon === "string"
          ? { icon: endIcon }
          : { ExternalIcon: endIcon }) as SvgIconProps);
      return (
        <>
          <div className={"flex items-center relative"}>
            {!!startIconProps && (
              <button onClick={handleIconClick}>
                <SvgIcon
                  {...startIconProps}
                  className={twMerge("left icon", classes?.startIcon)}
                />
              </button>
            )}
            <Typography
              variant="caption2"
              className={"left line-clamp-1 text-left"}
            >
              {textLeft}
            </Typography>
          </div>

          <div className="flex items-center">
            {!!textRight && (
              <Typography variant="caption2" className="right">
                {textRight}
              </Typography>
            )}
            {!!endIconProps && (
              <SvgIcon
                {...endIconProps}
                className={twMerge("ml-auto mr-0 right icon", classes?.endIcon)}
              />
            )}
          </div>
        </>
      );
    }, [
      classes?.endIcon,
      classes?.startIcon,
      endIcon,
      handleIconClick,
      startIcon,
      textLeft,
      textRight,
    ]);

    const style: React.CSSProperties = useMemo(() => {
      if (leftIndent > 0) {
        return {
          paddingLeft: leftIndent + "px",
        };
      }
      return {};
    }, [leftIndent]);

    const NavBarContent = useMemo(() => {
      if (link) {
        return (
          <Link
            href={link}
            onClick={disabled ? undefined : onClick}
            className={className}
            style={style}
            role="button"
            ref={_ref as React.RefObject<HTMLAnchorElement>}
            data-disabled={disabled}
            onContextMenu={onContextMenu}
          >
            {Content}
          </Link>
        );
      }

      return (
        <li
          data-disabled={disabled}
          onClick={disabled ? undefined : onClick}
          className={className}
          role="button"
          style={style}
          ref={_ref as React.RefObject<HTMLLIElement>}
          tabIndex={0}
          onContextMenu={onContextMenu}
        >
          {Content}
        </li>
      );
    }, [
      Content,
      _ref,
      className,
      disabled,
      link,
      onClick,
      onContextMenu,
      style,
    ]);

    useEffect(() => {
      if (!_ref.current) return;
      const isOverflowing =
        _ref.current.offsetHeight < _ref.current.scrollHeight ||
        _ref.current.offsetWidth < _ref.current.scrollWidth;
      if (!_tooltipProps && isOverflowing) {
        setTooltipProps({
          content: textLeft,
        });
      }
    }, [_ref, _tooltipProps, textLeft]);

    if (_tooltipProps) {
      return <Tooltip {..._tooltipProps}>{NavBarContent}</Tooltip>;
    }
    return NavBarContent;
  }
);

NavigationBarItem.displayName = "NavigationBarItem";

export default NavigationBarItem;
