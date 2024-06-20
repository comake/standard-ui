import React from 'react';
import { IconProps } from '.';

function Empty(props: IconProps) {
  return (
    <svg
      className={props.className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        
        d=""
        fill="currentcolor"
      />
    </svg>
  );
}

export default Empty;
