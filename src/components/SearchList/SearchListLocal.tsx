import React, {
  ElementType,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { SearchListItem } from ".";
import { twMerge } from "tailwind-merge";
import SvgIcon from "../SvgIcon";
import CreateNewEntry from "./CreateNewEntry";
import SchemaItem from "./SchemaSelector/SchemaItem";
import Typography from "../Typography";
import TextInput from "../TextInput";

export interface SearchListLocalProps {
  items: SearchListItem[];
  EndActions?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  handleSelect: (item: SearchListItem) => void;
  focusOnMount?: boolean;
  createNewProps?: {
    Component: ElementType<{ data: { name: string; onDone: () => void } }>;
    label?: string;
    renderListItem: (inputText: string) => SearchListItem;
  };
}

export function SearchListLocal(props: SearchListLocalProps) {
  const {
    items,
    createNewProps,
    EndActions,
    className,
    handleSelect,
    focusOnMount,
    contentClassName,
  } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [showCreateNew, setShowCreateNew] = useState(false);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  useEffect(() => {
    const results = items.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
  }, [items, searchTerm]);

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    []
  );

  const handleItemSelect = useCallback(
    (item: SearchListItem) => {
      handleSelect(item);
    },
    [handleSelect]
  );

  const handlePropertyAfterInlineSave = () => {
    setShowCreateNew(false);
  };

  const listItemCreateNew = useMemo(() => {
    if (!createNewProps) return null;
    if (!searchTerm) return null;
    return {
      ...createNewProps.renderListItem(searchTerm),
      onClick: () => setShowCreateNew(true),
    };
  }, [createNewProps, searchTerm]);

  if (showCreateNew && createNewProps) {
    const Cmp = createNewProps.Component;
    return (
      <CreateNewEntry
        className={twMerge("w-[350px]", className)}
        handleBack={() => setShowCreateNew(false)}
        label={createNewProps.label}
      >
        <Cmp
          data={{ name: searchTerm, onDone: handlePropertyAfterInlineSave }}
        />
      </CreateNewEntry>
    );
  }

  return (
    <div className={twMerge("w-[350px]", className)}>
      <div className="p-4">
        <TextInput
          inputProps={{ autoFocus: focusOnMount }}
          onChange={handleSearch}
          endIcon="search"
          placeholder="Search"
        />
      </div>
      <div
        className={twMerge("max-h-[240px] overflow-y-auto", contentClassName)}
      >
        {filteredItems.map((item) => (
          <SchemaItem
            key={item.id}
            handleItemSelect={handleItemSelect}
            item={item}
          />
        ))}
        {listItemCreateNew ? (
          <button
            onClick={listItemCreateNew.onClick}
            className="flex items-center w-full py-3 px-4 justify-center border-b border-[#E0E0E0] last:border-b-0"
          >
            <div className="flex flex-col w-full items-start">
              <Typography variant="caption1" className="!font-bold">
                {listItemCreateNew.title}
              </Typography>
              <Typography variant="caption1" className="text-left">
                {listItemCreateNew.subtitle}
              </Typography>
            </div>
            <SvgIcon icon="chevronRight" className="ml-auto text-[#808080] " />
          </button>
        ) : null}
        {EndActions && <div className="p-4">{EndActions}</div>}
      </div>
    </div>
  );
}
