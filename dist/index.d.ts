import React, { FC, ComponentType, PropsWithChildren, ReactNode, HTMLProps, ElementType, ReactElement, MutableRefObject } from 'react';

type AvatarSizeVariant = "s";
interface AvatarProps {
    url: string;
    size?: AvatarSizeVariant;
}
declare function Avatar({ url, size }: AvatarProps): React.JSX.Element;

interface AvatarListProps {
    imageList: string[];
    additionalCount?: number;
    label?: string;
}
declare function AvatarList({ imageList, additionalCount, label }: AvatarListProps): React.JSX.Element;

interface CircularProgressProps {
    className?: string;
}
declare const CircularProgress: FC<CircularProgressProps>;

declare function ArrowDownSolid(props: IconProps): React.JSX.Element;

declare function ArrowTopRight({ className }: IconProps): React.JSX.Element;

declare function Overlay({ className }: IconProps): React.JSX.Element;

declare function Plus(props: IconProps): React.JSX.Element;

declare function Commit(props: IconProps): React.JSX.Element;

type TableProps = IconProps;
declare function Table({ className }: TableProps): React.JSX.Element;

declare function Graph(props: IconProps): React.JSX.Element;

declare function Fork(props: IconProps): React.JSX.Element;

type ArrowRightSolidProps = IconProps;
declare function ArrowRightSolid({ className }: ArrowRightSolidProps): React.JSX.Element;

declare function PlusSolid(props: IconProps): React.JSX.Element;

declare function Empty(props: IconProps): React.JSX.Element;

type MenuProps = IconProps;
declare function Menu({ className }: MenuProps): React.JSX.Element;

declare function IssueOpen(props: IconProps): React.JSX.Element;

interface SvgSupportedIconProps extends IconProps {
    icon: keyof typeof IconMap;
}
interface SvgExternalIconProps extends IconProps {
    ExternalIcon: ComponentType;
}
interface IconProps {
    className?: string;
    title?: string;
}
declare const IconMap: {
    readonly progress: React.FC<CircularProgressProps>;
    readonly table: typeof Table;
    readonly search: React.FC<IconProps>;
    readonly moreHorizontal: React.FC<IconProps>;
    readonly arrowDownSolid: typeof ArrowDownSolid;
    readonly arrowRightSolid: typeof ArrowRightSolid;
    readonly trash: React.FC<IconProps>;
    readonly eyeOpen: React.FC<IconProps>;
    readonly eyeClose: React.FC<IconProps>;
    readonly help: React.FC<IconProps>;
    readonly filter: React.FC<IconProps>;
    readonly pencil: React.FC<IconProps>;
    readonly group: React.FC<IconProps>;
    readonly rightArrow: React.FC<IconProps>;
    readonly leftArrow: React.FC<IconProps>;
    readonly lock: React.FC<IconProps>;
    readonly link: React.FC<IconProps>;
    readonly plus: typeof Plus;
    readonly upArrow: React.FC<IconProps>;
    readonly downArrow: React.FC<IconProps>;
    readonly chevronDown: React.FC<IconProps>;
    readonly chevronUp: React.FC<IconProps>;
    readonly chevronRight: React.FC<IconProps>;
    readonly chevronLeft: React.FC<IconProps>;
    readonly checkSquare: React.FC<IconProps>;
    readonly external: React.FC<IconProps>;
    readonly sort: React.FC<IconProps>;
    readonly sortCountAscending: React.FC<IconProps>;
    readonly sortCountDescending: React.FC<IconProps>;
    readonly comment: React.FC<IconProps>;
    readonly check: React.FC<IconProps>;
    readonly ellipsis: React.FC<IconProps>;
    readonly close: React.FC<IconProps>;
    readonly home: React.FC<IconProps>;
    readonly questionCircle: React.FC<IconProps>;
    readonly successCheck: React.FC<IconProps>;
    readonly error: React.FC<IconProps>;
    readonly info: React.FC<IconProps>;
    readonly expand: React.FC<IconProps>;
    readonly lightning: React.FC<IconProps>;
    readonly list: React.FC<IconProps>;
    readonly layout: React.FC<IconProps>;
    readonly code: React.FC<IconProps>;
    readonly copy: React.FC<IconProps>;
    readonly download: React.FC<IconProps>;
    readonly dragHandle: React.FC<IconProps>;
    readonly arrowTopRight: typeof ArrowTopRight;
    readonly overlay: typeof Overlay;
    readonly transform: React.FC<IconProps>;
    readonly play: React.FC<IconProps>;
    readonly plug: React.FC<IconProps>;
    readonly commit: typeof Commit;
    readonly graph: typeof Graph;
    readonly fork: typeof Fork;
    readonly plusSolid: typeof PlusSolid;
    readonly empty: typeof Empty;
    readonly menu: typeof Menu;
    readonly issueOpen: typeof IssueOpen;
};
type SvgIconProps = SvgSupportedIconProps | SvgExternalIconProps;
declare const SvgIcon: FC<SvgIconProps>;

type TooltipVariants = "primary" | "secondary";
interface TooltipProps extends PropsWithChildren {
    content: string | ReactNode;
    variant?: TooltipVariants;
}
declare function Tooltip({ content, children, variant, }: TooltipProps): React.JSX.Element;

type ButtonVariants = "primary" | "secondary" | "link";
type ButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => void;
type AnchorClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => void;
interface ButtonProps extends PropsWithChildren<Pick<HTMLProps<HTMLButtonElement>, "className" | "disabled" | "title" | "id">> {
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
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;

interface ButtonsSetProps {
    buttons: ButtonProps[];
    className?: string;
}
declare const ButtonsSet: FC<ButtonsSetProps>;

type CardContentVariants = 'icon' | 'large-title-right-align' | 'large-title-left-align' | 'simple-long-description' | 'with-additional-content';
interface CardContentProps {
    title?: ReactNode;
    subtitle?: ReactNode;
    description?: ReactNode;
    icon?: SvgSupportedIconProps['icon'];
    variant: CardContentVariants;
    isLoading?: boolean;
    additionalContent?: ReactNode;
    className?: string;
    classes?: {
        topSectionClassName?: string;
        titleClassName?: string;
        subtitleClassName?: string;
        descriptionClassName?: string;
    };
}
declare function CardContent({ title, subtitle, variant: v, description, icon, isLoading, additionalContent, classes, className: rootClassName, }: CardContentProps): React.JSX.Element;

interface CheckboxProps {
    label: string;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    isChecked?: boolean;
    isDisabled?: boolean;
    className?: string;
    labelClassName?: string;
    inputClassName?: string;
}
declare function Checkbox({ label, name, isDisabled, onChange, isChecked, className, labelClassName, inputClassName, }: CheckboxProps): React.JSX.Element;

interface ClickAwayListenerProps extends HTMLProps<HTMLDivElement> {
    onClickAway: () => void;
    className?: string;
}
declare const ClickAwayListener: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<ClickAwayListenerProps>, "ref"> & React.RefAttributes<HTMLDivElement>>;

type HorizontalSpacerSize = 'xxxxs' | 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl';
interface HorizontalSpacerProps {
    size: HorizontalSpacerSize;
    isFlexChild?: boolean;
}
declare function HorizontalSpacer({ size, isFlexChild }: HorizontalSpacerProps): React.JSX.Element;

type NavigationBarVariants$1 = 'primary' | 'secondary';
type SpacingVariants$1 = 0 | 1 | 2;
interface NavigationBarHeaderProps {
    contentLeft: string | ReactNode;
    contentRight?: string | ReactNode;
    variant?: NavigationBarVariants$1;
    leftIcon?: SvgSupportedIconProps['icon'];
    rightIcon?: SvgSupportedIconProps['icon'];
    className?: string;
    spacing?: SpacingVariants$1;
    onClick?: () => void;
}
declare function NavigationBarHeader({ contentLeft, contentRight, leftIcon, rightIcon, variant, className: cn, spacing, onClick, }: NavigationBarHeaderProps): React.JSX.Element;

type SpacingVariants = 0 | 1 | 2;
type NavigationBarVariants = 'primary' | 'secondary';
interface NavigationBarItemClasses {
    root?: string;
    textLeft?: string;
    textRight?: string;
    startIcon?: string;
    endIcon?: string;
}
interface NavigationBarItemProps {
    endIcon?: SvgSupportedIconProps['icon'] | SvgExternalIconProps['ExternalIcon'];
    textLeft: ReactNode;
    textRight?: ReactNode;
    startIcon?: SvgSupportedIconProps['icon'] | SvgExternalIconProps['ExternalIcon'];
    classes?: NavigationBarItemClasses;
    handleIconClick?: React.MouseEventHandler<HTMLButtonElement>;
    onClick?: React.MouseEventHandler<HTMLLIElement | HTMLAnchorElement>;
    disabled?: boolean;
    isActive?: boolean;
    spacing?: SpacingVariants;
    variant?: NavigationBarVariants;
    leftIndent?: number;
    isIconButton?: boolean;
    className?: string;
    link?: string;
    tooltipProps?: TooltipProps;
    LinkComponent?: React.ElementType;
    onContextMenu?: (e: React.MouseEvent<HTMLAnchorElement | HTMLLIElement>) => void;
}
declare const NavigationBarItem: React.ForwardRefExoticComponent<NavigationBarItemProps & React.RefAttributes<HTMLAnchorElement | HTMLLIElement>>;

interface NavigationBarItemWithDropDownProps extends NavigationBarItemProps {
    additionalOptions: OptionItem[][];
}
declare function NavigationBarItemWithDropdown({ additionalOptions, ...navBarItemProps }: NavigationBarItemWithDropDownProps): React.JSX.Element;

interface OptionItem {
    label: string;
    icon: SvgSupportedIconProps['icon'];
    action?: (e: React.MouseEvent<HTMLLIElement>) => void;
    className?: string;
    OverlayContent?: () => JSX.Element;
}

interface SearchListLocalProps {
    items: SearchListItem[];
    EndActions?: React.ReactNode;
    className?: string;
    contentClassName?: string;
    handleSelect: (item: SearchListItem) => void;
    focusOnMount?: boolean;
    createNewProps?: {
        Component: ElementType<{
            data: {
                name: string;
                onDone: () => void;
            };
        }>;
        label?: string;
        renderListItem: (inputText: string) => SearchListItem;
    };
}
declare function SearchListLocal(props: SearchListLocalProps): React.JSX.Element;

type ClickHandler = (e: React.MouseEvent) => void;
type ListItemRenderer<ListItem> = (item: ListItem, onClick: ClickHandler) => ReactNode;
type CreateNewComponentProps = {
    data: {
        name: string;
        onDone: () => void;
    };
};
type CreateNewComponent = (props: CreateNewComponentProps) => ReactElement | null;
interface SearchableOptionsListProps<ListItem> {
    items: ListItem[] | ListItem[][];
    filterByKey: keyof ListItem;
    renderComponent: ListItemRenderer<ListItem>;
    EndActions?: React.ReactNode;
    className?: string;
    handleSelect: (e: React.MouseEvent, item: ListItem) => void;
    createNewProps?: {
        Component: CreateNewComponent;
        label?: string;
        renderListItem: (inputText: string) => SearchListItem;
    };
}
declare function createRendererWithNavigationBarItem<ListItem extends {
    disabled?: boolean;
}>(labelKey: keyof ListItem): ListItemRenderer<ListItem>;
declare function SearchableOptionsList<T>(props: SearchableOptionsListProps<T>): React.JSX.Element;

interface SearchListLocalPopupProps<T> extends SearchableOptionsListProps<T> {
    children: React.ReactNode;
    buttonClassName?: string;
    variant?: 'button-like' | 'plain';
}
declare function SearchListLocalPopup<T>(props: SearchListLocalPopupProps<T>): React.JSX.Element;

interface SearchListNetworkProps {
    EndActions?: React.ReactNode;
    className?: string;
    contentClassName?: string;
    handleSelect: (item: SearchListItem) => void;
    searchNetwork: (searchTerm: string) => Promise<SearchListItem[]>;
}
declare function SearchListNetwork(props: SearchListNetworkProps): React.JSX.Element;

interface SearchListItem {
    title: string;
    description?: string;
    subtitle?: string;
    externalLink?: string;
    meta?: any;
    id: string;
}

interface SelectOption<Value extends string | number> {
    label: string;
    iconUrl?: string;
    value: Value;
}
type SelectVariants = "primary" | "secondary";
interface SelectBaseProps<Value extends string> {
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
interface SelectSingleProps<Value extends string> extends SelectBaseProps<Value> {
    value?: Value;
    onChange?: SingleSelectOnChangeHandler<Value>;
}
type MultiSelectOnChangeHandler<Value extends string> = (value: Value[]) => void;
interface SelectMultipleProps<Value extends string> extends SelectBaseProps<Value> {
    multiple: true;
    value?: Value[];
    onChange?: MultiSelectOnChangeHandler<Value>;
}
type SelectProps<Value extends string> = SelectSingleProps<Value> | SelectMultipleProps<Value>;
declare function Select<Value extends string>({ options, ariaLabel, value, onChange, multiple, fullWidth, variant, classes, disabled, icon, showIconInOptions, className, }: SelectProps<Value>): React.JSX.Element;

interface SwitchConfig {
    id: string;
    label: string;
    icon: SvgSupportedIconProps['icon'];
}
interface SwitchProps {
    orientation?: 'vertical' | 'horizontal';
    configList: SwitchConfig[];
    onChange: (id: SwitchConfig['id']) => void;
    activeId: string;
}
declare function Switch({ orientation, configList, onChange, activeId, }: SwitchProps): React.JSX.Element;

type RoundedSides = 'left' | 'right' | 'top' | 'bottom';
interface SwitchButtonProps extends SwitchConfig, Pick<SwitchProps, 'onChange'> {
    isActive: boolean;
    roundSide?: RoundedSides;
}
declare function SwitchButton({ id, label, icon, onChange, isActive, roundSide, }: SwitchButtonProps): React.JSX.Element;

type SizeVariants = "small" | "large";
type TabVariants = "primary" | "secondary";
type Router = {
    push: (link: string) => unknown | Promise<unknown>;
    [key: string | number]: unknown;
};
interface TabButtonBaseProps {
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
interface TabLinkButtonProps extends TabButtonBaseProps {
    link: string;
}
interface TabButtonProps<T = string> extends TabButtonBaseProps {
    value: T;
    onClick: (id: T) => void | Promise<void>;
}
declare function TabButton<T>({ label, isActive, size, variant, icon, className: cn, router, LinkComponent: Link, ...differentiatorProps }: TabButtonProps<T> | TabLinkButtonProps): React.JSX.Element;

interface TagProps {
    variant: string;
    label: string;
    icon?: SvgSupportedIconProps['icon'];
}
declare function Tag({ label, variant, icon }: TagProps): React.JSX.Element;

type TextInputVariants = 'primary';
interface TextInputBaseProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    variant?: TextInputVariants;
    onIconClick?: (e: React.MouseEvent<HTMLButtonElement>, icon: 'start' | 'end') => void;
    startIcon?: SvgSupportedIconProps['icon'];
    id?: string;
    endIcon?: SvgSupportedIconProps['icon'];
    className?: string;
    inputProps?: Omit<HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'value' | 'placeholder'>;
    type?: 'password' | 'number' | 'text' | 'date';
    value?: HTMLProps<HTMLInputElement>['value'];
    placeholder?: string;
    disabled?: boolean;
    iconButtonClassName?: string;
    isLoading?: boolean;
}

interface ExpandableTextInputProps extends TextInputBaseProps {
    onExpandChange?: (isExpanded: boolean) => void;
    expandedByDefault?: boolean;
}

interface TextInputProps extends TextInputBaseProps, ExpandableTextInputProps {
    isExpandable?: boolean;
}
declare function TextInput({ isExpandable, ...props }: TextInputProps): React.JSX.Element;

type TypographyElements = HTMLHeadingElement | HTMLSpanElement | HTMLParagraphElement;
type TypographyVariants = 'display-large' | 'display-medium' | 'display-small' | 'display-x-small' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1' | 'b2' | 'caption1' | 'caption2';
interface TypographyProps extends PropsWithChildren, Pick<HTMLProps<HTMLParagraphElement>, 'tabIndex' | 'onClick'> {
    variant?: TypographyVariants;
    className?: string;
    dangerouslySetInnerHTML?: string;
    id?: string;
    componentRef?: MutableRefObject<HTMLHeadingElement | null> | MutableRefObject<HTMLSpanElement | null> | MutableRefObject<HTMLParagraphElement | null>;
}
declare function Typography({ variant, className: cn, children, dangerouslySetInnerHTML, id, componentRef, ...nativeProps }: TypographyProps): React.JSX.Element;

type VerticalSpacerSize = 'xxxxs' | 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl';
interface VerticalSpacerProps {
    size: VerticalSpacerSize;
    isFlexChild?: boolean;
}
declare function VerticalSpacer({ size, isFlexChild }: VerticalSpacerProps): React.JSX.Element;

export { Avatar, AvatarList, Button, type ButtonProps, ButtonsSet, type ButtonsSetProps, CardContent, type CardContentProps, type CardContentVariants, Checkbox, type CheckboxProps, CircularProgress, type CircularProgressProps, ClickAwayListener, type ClickAwayListenerProps, type ClickHandler, type CreateNewComponent, type CreateNewComponentProps, HorizontalSpacer, type IconProps, type ListItemRenderer, NavigationBarHeader, NavigationBarItem, type NavigationBarItemClasses, type NavigationBarItemProps, type NavigationBarItemWithDropDownProps, NavigationBarItemWithDropdown, type Router, type SearchListItem, SearchListLocal, SearchListLocalPopup, type SearchListLocalPopupProps, type SearchListLocalProps, SearchListNetwork, type SearchListNetworkProps, SearchableOptionsList, type SearchableOptionsListProps, Select, type SelectBaseProps, type SelectMultipleProps, type SelectOption, type SelectProps, type SelectSingleProps, type SelectVariants, type SvgExternalIconProps, SvgIcon, type SvgIconProps, type SvgSupportedIconProps, Switch, SwitchButton, type SwitchConfig, type SwitchProps, TabButton, type TabButtonBaseProps, type TabButtonProps, type TabLinkButtonProps, Tag, TextInput, type TextInputProps, Tooltip, type TooltipProps, Typography, type TypographyElements, type TypographyProps, type TypographyVariants, VerticalSpacer, type VerticalSpacerSize, createRendererWithNavigationBarItem };
