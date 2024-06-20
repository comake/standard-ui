import React, { type FC } from 'react';
import { IconProps } from '.';

const Home: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.96094 13.95V6.39005L9.00094 2.61005L14.0409 6.39005V13.95H10.2609V9.54005H7.74094V13.95H3.96094Z"
        fill="currentcolor"
      />
    </svg>
  );
};

export default Home;
