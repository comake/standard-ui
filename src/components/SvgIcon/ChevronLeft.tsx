import React, { type FC } from 'react';
import { IconProps } from '.';

const ChevronLeft: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        
        d="M4.69775 10.0516C4.69775 10.2817 4.78978 10.5118 4.96469 10.6684L12.2651 17.803C12.4215 17.9595 12.6241 18.0516 12.8542 18.0516C13.3329 18.0516 13.7012 17.6833 13.7012 17.2046C13.7012 16.9837 13.6091 16.7627 13.4618 16.6062L6.75989 10.0516L13.4618 3.49692C13.6091 3.34039 13.7012 3.12868 13.7012 2.89854C13.7012 2.41981 13.3329 2.05157 12.8542 2.05157C12.6241 2.05157 12.4215 2.14364 12.2559 2.30013L4.96469 9.43478C4.78978 9.60969 4.69775 9.81221 4.69775 10.0516Z"
        fill="currentcolor"
      />
    </svg>
  );
};

export default ChevronLeft;
