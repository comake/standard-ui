import React, { ElementType } from "react";
import { SearchListItem } from ".";
export interface SearchListLocalProps {
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
export declare function SearchListLocal(props: SearchListLocalProps): React.JSX.Element;
