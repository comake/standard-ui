import React from 'react';
import SvgIcon from '../SvgIcon';
import Typography from '../Typography';

export interface CreateNewEntryProps {
  children: React.ReactNode;
  handleBack: () => void;
  label?: string;
  className?: string;
}

export function CreateNewEntry(props: CreateNewEntryProps) {
  const { children, handleBack, className, label } = props;
  return (
    <div className={className}>
      <div className="p-4 flex items-center">
        <button onClick={handleBack}>
          <SvgIcon icon="chevronLeft" className="text-[#808080] " />
        </button>
        <Typography
          variant="caption1"
          className="ml-2 text-[#808080] font-semibold uppercase"
        >
          {label}
        </Typography>
      </div>
      {children}
    </div>
  );
}

export default CreateNewEntry;
