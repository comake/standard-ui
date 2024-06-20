import React from 'react';
import { IconProps } from '.';

function Plus(props: IconProps) {
  const { className } = props;
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        
        d="M27.25 9.88867C27.25 8.64603 26.2426 7.63867 25 7.63867C23.7573 7.63867 22.75 8.64603 22.75 9.88867V22.7498L9.88892 22.7498C8.64628 22.7498 7.63892 23.7571 7.63892 24.9998C7.63892 26.2424 8.64628 27.2498 9.88892 27.2498H22.75V40.1109C22.75 41.3535 23.7573 42.3609 25 42.3609C26.2426 42.3609 27.25 41.3535 27.25 40.1109V27.2498H40.1111C41.3538 27.2498 42.3611 26.2424 42.3611 24.9998C42.3611 23.7571 41.3538 22.7498 40.1111 22.7498L27.25 22.7498V9.88867Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Plus;
