import React from 'react';
import { SearchableOptionsListProps } from './SearchableOptionsList';
export interface SearchListLocalPopupProps<T> extends SearchableOptionsListProps<T> {
    children: React.ReactNode;
    buttonClassName?: string;
    variant?: 'button-like' | 'plain';
}
export declare function SearchListLocalPopup<T>(props: SearchListLocalPopupProps<T>): React.JSX.Element;
