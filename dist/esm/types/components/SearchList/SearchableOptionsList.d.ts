import React, { ReactElement, ReactNode } from "react";
import { SearchListItem } from ".";
export type ClickHandler = (e: React.MouseEvent) => void;
export type ListItemRenderer<ListItem> = (item: ListItem, onClick: ClickHandler) => ReactNode;
export type CreateNewComponentProps = {
    data: {
        name: string;
        onDone: () => void;
    };
};
export type CreateNewComponent = (props: CreateNewComponentProps) => ReactElement | null;
export interface SearchableOptionsListProps<ListItem> {
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
export declare function createRendererWithNavigationBarItem<ListItem extends {
    disabled?: boolean;
}>(labelKey: keyof ListItem): ListItemRenderer<ListItem>;
export declare function SearchableOptionsList<T>(props: SearchableOptionsListProps<T>): React.JSX.Element;
