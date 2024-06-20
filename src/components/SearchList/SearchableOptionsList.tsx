import React, {
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import _ from "lodash";
import TextInput from "../TextInput";
import CreateNewEntry from "./CreateNewEntry";
import { SearchListItem } from ".";
import SvgIcon from "../SvgIcon";
import Typography from "../Typography";
import NavigationBarItem from "../NavigationBarItem";

export type ClickHandler = (e: React.MouseEvent) => void;

export type ListItemRenderer<ListItem> = (
  item: ListItem,
  onClick: ClickHandler
) => ReactNode;

export type CreateNewComponentProps = {
  data: {
    name: string;
    onDone: () => void;
  };
};

export type CreateNewComponent = (
  props: CreateNewComponentProps
) => ReactElement | null;

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

export function createRendererWithNavigationBarItem<
  ListItem extends { disabled?: boolean }
>(labelKey: keyof ListItem): ListItemRenderer<ListItem> {
  return function ListItemRenderer(item: ListItem, onClick: ClickHandler) {
    return (
      <NavigationBarItem
        disabled={item.disabled}
        textLeft={_.get(item, labelKey) as ReactNode}
        onClick={onClick}
      />
    );
  };
}

export function SearchableOptionsList<T>(props: SearchableOptionsListProps<T>) {
  const {
    items: possibly1D,
    EndActions,
    className,
    handleSelect,
    renderComponent,
    filterByKey,
    createNewProps,
  } = props;
  const items: T[][] = useMemo(
    () => (Array.isArray(possibly1D[0]) ? possibly1D : [possibly1D]) as T[][],
    [possibly1D]
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState<T[][]>(items);
  const [showCreateNew, setShowCreateNew] = useState(false);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  useEffect(() => {
    const results = searchTerm
      ? items.map((set) =>
          set.filter((item) =>
            (_.get(item, filterByKey) as string)
              ?.toLowerCase()
              .includes(searchTerm.toLowerCase())
          )
        )
      : items;
    setFilteredItems(results);
  }, [filterByKey, items, searchTerm]);

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    []
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
    const Cmp = createNewProps.Component as CreateNewComponent;
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
    <div className={className}>
      <div className="p-4">
        <TextInput
          type="text"
          inputProps={{ autoFocus: true }}
          placeholder="Search"
          className="w-full outline-none bg-transparent"
          value={searchTerm}
          onChange={handleSearch}
          endIcon="search"
        />
      </div>
      <div className="max-h-[240px] overflow-y-auto">
        {filteredItems.map((set, index) => (
          <ListSet
            set={set}
            renderComponent={renderComponent}
            key={index}
            handleSelect={handleSelect}
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
function ListSet<T>({
  set,
  renderComponent,
  handleSelect,
}: Pick<SearchableOptionsListProps<T>, "renderComponent" | "handleSelect"> & {
  set: T[];
}) {
  const handleItemSelect = useCallback(
    (item: T) => (e: React.MouseEvent) => {
      handleSelect(e, item);
    },
    [handleSelect]
  );
  return (
    <div className="py-core-dimension-37 [&:not(:last-child)]:border-b border-border-base-base-400 [&:empty]:hidden">
      {set.map((item, index) => (
        <React.Fragment key={index}>
          {renderComponent(item, handleItemSelect(item))}
        </React.Fragment>
      ))}
    </div>
  );
}
