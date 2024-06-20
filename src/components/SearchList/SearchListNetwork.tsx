import React, { useEffect, useState } from 'react';
import { SearchListItem } from '.';
import { twMerge } from 'tailwind-merge';
import TextInput from '../TextInput';
import SchemaItem from './SchemaSelector/SchemaItem';

export interface SearchListNetworkProps {
  EndActions?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  handleSelect: (item: SearchListItem) => void;
  searchNetwork: (searchTerm: string) => Promise<SearchListItem[]>;
}

export function SearchListNetwork(props: SearchListNetworkProps) {
  const { EndActions, className, handleSelect, contentClassName, searchNetwork } = props;

  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState<SearchListItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch data from network
    // debounce the search term
    const delayDebounceFn = setTimeout(async () => {
      setLoading(true);
      const results = await searchNetwork(searchTerm);
      setItems(results);
      setLoading(false);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSearchTermChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleItemSelect = (item: SearchListItem) => {
    handleSelect(item);
  };

  return (
    <div className={twMerge('w-[350px]', className)}>
      <div className="p-4">
        <TextInput
          isLoading={loading}
          inputProps={{ autoFocus: true }}
          onChange={handleSearchTermChange}
          value={searchTerm}
          endIcon="search"
          placeholder="Search"
        />
      </div>
      <div className={twMerge('max-h-[240px] overflow-y-auto', contentClassName)}>
        {items.map((item) => (
          <SchemaItem key={item.id} handleItemSelect={handleItemSelect} item={item} />
        ))}

        {EndActions && <div className="p-4">{EndActions}</div>}
      </div>
    </div>
  );
}

export default SearchListNetwork;
