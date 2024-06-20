import React, { type FC } from 'react';
import { IconProps } from '.';

const ChevronRight: FC<IconProps> = ({ className }) => {
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
        
        d="M15.3023 10.0516C15.3023 9.82144 15.2102 9.5913 15.0353 9.43478L7.73494 2.30013C7.57845 2.14364 7.37593 2.05157 7.14576 2.05157C6.66707 2.05157 6.29883 2.41981 6.29883 2.89854C6.29883 3.11949 6.3909 3.34043 6.53815 3.49692L13.2401 10.0516L6.53815 16.6062C6.3909 16.7628 6.29883 16.9745 6.29883 17.2046C6.29883 17.6833 6.66707 18.0516 7.14576 18.0516C7.37593 18.0516 7.57846 17.9595 7.74413 17.803L15.0353 10.6684C15.2102 10.4935 15.3023 10.2909 15.3023 10.0516Z"
        fill="currentcolor"
      />
    </svg>
  );
};

export default ChevronRight;
