import React, {FC} from 'react';
import { IconProps } from '.';

const Play: FC<IconProps> = (props) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        
        d="M25 5C14 5 5 14 5 25C5 36 14 45 25 45C36 45 45 36 45 25C45 14 36 5 25 5ZM19.75 33.5833V16.6667L34.3333 25.0833L19.75 33.5833Z"
        fill="currentcolor"
      />
    </svg>
  );
};

export default Play;