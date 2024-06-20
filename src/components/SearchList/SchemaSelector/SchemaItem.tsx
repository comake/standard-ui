import React, { useCallback } from "react";
import { SearchListItem } from "..";
import Typography from "../../Typography";

export interface SchemaItemProps {
  item: SearchListItem;
  handleItemSelect: (item: SearchListItem) => void;
}

export function SchemaItem(props: SchemaItemProps) {
  const { item, handleItemSelect } = props;

  const handleClick = useCallback(() => {
    handleItemSelect(item);
  }, []);

  return (
    <div
      role="button"
      onClick={handleClick}
      className="flex flex-col w-full py-3 px-4 justify-center border-b border-[#E0E0E0] last:border-b-0"
    >
      <div className="flex justify-between text-sm">
        <Typography variant="caption1" className="!font-medium">
          {item.title}
        </Typography>
        <Typography variant="caption1" className="text-[#B5B5B5]">
          {item.subtitle}
        </Typography>
      </div>
      <Typography variant="caption1" className="text-[#4B4B4B]">
        {item.description}
      </Typography>
    </div>
  );
}

export default SchemaItem;
