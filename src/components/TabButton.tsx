import React, { useMemo, useCallback, useTransition } from "react";
import SvgIcon, { SvgSupportedIconProps } from "./SvgIcon";
import CircularProgress from "./CircularProgress";

type SizeVariants = "small" | "large";

type TabVariants = "primary" | "secondary";

export type Router = {
  push: (link: string) => unknown | Promise<unknown>;
  [key: string | number]: unknown;
}; // Stand in for NextRouter;

export interface TabButtonBaseProps {
  label: string;
  isActive?: boolean;
  size?: SizeVariants;
  variant?: TabVariants;
  icon?: SvgSupportedIconProps["icon"];
  className?: string;
  onContextMenu?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
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

const sizeToClassMapping: Record<SizeVariants, string> = {
  small: "small ",
  large: "",
};

const variantToClassMapping: Record<TabVariants, string> = {
  primary: "primary active:pressed",
  secondary: "secondary active:pressed",
};

const variantToActiveClassMapping: Record<TabVariants, string> = {
  primary: "!border-t-0 !border-r-0 !border-l-0 selected",
  secondary: "selected",
};

export function TabButton<T>({
  label,
  isActive,
  size = "large",
  variant = "primary",
  icon,
  className: cn = "",
  router,
  LinkComponent: Link = "a",
  ...differentiatorProps
}: TabButtonProps<T> | TabLinkButtonProps) {
  const [isPending, startTransitioning] = useTransition();

  const handleClickButton = useCallback(() => {
    const { value, onClick } = (differentiatorProps ?? {}) as TabButtonProps<T>;
    if (typeof value !== "undefined" && onClick) {
      startTransitioning(() => {
        new Promise((resolve) => resolve(onClick(value)));
      });
    }
  }, [differentiatorProps]);

  const handleClickLink = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const { link } = (differentiatorProps ?? {}) as TabLinkButtonProps;
      if (link) {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          window.open(link, "_blank");
        } else {
          startTransitioning(() => {
            router?.push(link);
          });
        }
      }
    },
    [differentiatorProps, router]
  );

  const className = useMemo(
    () =>
      [
        "tabs inline-flex items-center active:pressed relative",
        isActive ? variantToActiveClassMapping[variant] : "",
        variantToClassMapping[variant],
        sizeToClassMapping[size],
        cn,
      ].join(" "),
    [isActive, cn, size, variant]
  );

  const pendingUI = useMemo(
    () => (
      <CircularProgress className="ml-core-dimension-25 !size-core-dimension-75" />
    ),
    []
  );

  if ((differentiatorProps as TabLinkButtonProps).link) {
    const tabLinkProps = differentiatorProps as TabLinkButtonProps;

    return (
      <Link
        href={tabLinkProps.link}
        className={className}
        onClick={handleClickLink}
      >
        {label}
        {isPending && pendingUI}
      </Link>
    );
  }

  return (
    <button onClick={handleClickButton} className={className}>
      {label}
      {icon && <SvgIcon icon={icon} />}
      {isPending && pendingUI}
    </button>
  );
}

export default TabButton;
