import React, { MouseEvent, useCallback, useMemo, useState } from "react";
import Button from "./Button";
import { SvgSupportedIconProps } from "./SvgIcon";
import NavigationBarItem from "./NavigationBarItem";
import { twMerge } from "tailwind-merge";
import * as Popover from "@radix-ui/react-popover";
import { SearchableOptionsList } from "./SearchList/SearchableOptionsList";

export interface SelectOption<Value extends string> {
  label: string;
  iconUrl?: string;
  value: Value;
}

export type SelectVariants = "primary" | "secondary";

export interface SelectBaseProps<Value extends string> {
  options: SelectOption<Value>[];
  multiple?: boolean;
  ariaLabel?: string;
  fullWidth?: boolean;
  classes?: {
    button?: string;
  };
  showIconInOptions?: boolean;
  variant?: SelectVariants;
  disabled?: boolean;
  icon?: SvgSupportedIconProps["icon"];
  arrowIcon?: SvgSupportedIconProps["icon"];
  className?: string;
}

type SingleSelectOnChangeHandler<Value extends string> = (value: Value) => void;
export interface SelectSingleProps<Value extends string>
  extends SelectBaseProps<Value> {
  value?: Value;
  onChange?: SingleSelectOnChangeHandler<Value>;
}

type MultiSelectOnChangeHandler<Value extends string> = (
  value: Value[]
) => void;

export interface SelectMultipleProps<Value extends string>
  extends SelectBaseProps<Value> {
  multiple: true;
  value?: Value[];
  onChange?: MultiSelectOnChangeHandler<Value>;
}

export type SelectProps<Value extends string> =
  | SelectSingleProps<Value>
  | SelectMultipleProps<Value>;

const DEFAULT_SELECT_OPTION_ICON = "/skl-bw.png";

const variantToClassMapping: Record<SelectVariants, string> = {
  primary: "primary",
  secondary: "secondary",
};

export function Select<Value extends string>({
  options,
  ariaLabel,
  value,
  onChange,
  multiple = false,
  fullWidth = false,
  variant = "primary",
  classes,
  disabled,
  icon,
  showIconInOptions = false,
  className,
}: SelectProps<Value>) {
  const [isOpen, setIsOpen] = useState(false);

  const { selected, label } = useMemo(() => {
    const selected: SelectOption<Value>[] = options.filter((option) =>
      multiple ? value?.includes(option.value) : option.value === value
    );

    const label = (selected as SelectOption<Value>[])
      .map((opt) => opt.label)
      .join(", ");
    return { selected, label };
  }, [value, options, multiple]);

  const handleSelectTrigger = useCallback(() => {
    setIsOpen((curr) => !curr);
  }, []);

  const optionClickHandler = useCallback(
    (_e: MouseEvent<Element>, item: SelectOption<Value>) => {
      const itemValue = item.value;
      if (multiple) {
        const newValue: Value[] = value ? [...(value as Value[])] : [];
        const index = newValue.findIndex((v) => itemValue === v);

        if (index > -1) {
          newValue.splice(index, 1);
        } else {
          newValue.push(itemValue);
        }

        (onChange as MultiSelectOnChangeHandler<Value>)?.(newValue);
      } else {
        (onChange as SingleSelectOnChangeHandler<Value>)?.(itemValue);
        setIsOpen(false);
      }
    },
    [multiple, onChange, value]
  );

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger
        aria-label={ariaLabel}
        className={[
          "select flex items-center",
          variantToClassMapping[variant],
          className,
        ].join(" ")}
        asChild
      >
        <Button
          startIcon={icon}
          endIcon="arrowDownSolid"
          endIconClass={twMerge("size-3", fullWidth && "absolute right-2")}
          disabled={disabled}
          onClick={handleSelectTrigger}
          className={twMerge(
            fullWidth ? "w-full relative pr-4 justify-start" : "w-fit",
            classes?.button
          )}
        >
          {showIconInOptions && (
            <img
              className="w-4"
              src={
                (selected as SelectOption<Value>[])[0]?.iconUrl ??
                DEFAULT_SELECT_OPTION_ICON
              }
              alt=""
            />
          )}{" "}
          {label}
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side={"bottom"}
          className={twMerge(
            "min-w-[8rem] border z-10 max-w-m max-h-[50vh] overflow-y-auto"
          )}
        >
          <SearchableOptionsList<SelectOption<Value>>
            items={options}
            filterByKey={"label"}
            renderComponent={(option, clickHandler) => (
              <NavigationBarItem
                textLeft={option.label}
                onClick={clickHandler}
                isActive={
                  selected.findIndex((s) => s.value === option.value) > -1
                }
                key={option.value}
              />
            )}
            handleSelect={optionClickHandler}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
export default Select;
