import React from "react";
import { SearchListItem } from "..";
export interface SchemaItemProps {
    item: SearchListItem;
    handleItemSelect: (item: SearchListItem) => void;
}
export declare function SchemaItem(props: SchemaItemProps): React.JSX.Element;
export default SchemaItem;
