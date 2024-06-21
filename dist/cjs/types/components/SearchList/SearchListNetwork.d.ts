import React from 'react';
import { SearchListItem } from '.';
export interface SearchListNetworkProps {
    EndActions?: React.ReactNode;
    className?: string;
    contentClassName?: string;
    handleSelect: (item: SearchListItem) => void;
    searchNetwork: (searchTerm: string) => Promise<SearchListItem[]>;
}
export declare function SearchListNetwork(props: SearchListNetworkProps): React.JSX.Element;
export default SearchListNetwork;
