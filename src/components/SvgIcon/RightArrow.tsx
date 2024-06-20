import React, { type FC } from 'react';
import { IconProps } from '.';

const RightArrow: FC<IconProps> = (props) => {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
      >
        <path
          
          d="M1.11914 7.00002C1.11914 6.69074 1.36986 6.44002 1.67914 6.44002L10.9672 6.44002L7.66716 3.14002C7.44847 2.92133 7.44847 2.56676 7.66716 2.34806C7.88586 2.12937 8.24043 2.12937 8.45912 2.34806L12.7122 6.60112C12.7158 6.60466 12.7193 6.60824 12.7228 6.61188C12.771 6.66193 12.808 6.71874 12.8339 6.77918C12.863 6.84694 12.8791 6.9216 12.8791 7.00002C12.8791 7.08083 12.862 7.15764 12.8312 7.22702C12.828 7.23423 12.8247 7.24139 12.8212 7.24848C12.814 7.26291 12.8062 7.27709 12.7978 7.29098C12.775 7.32838 12.7475 7.36369 12.7151 7.39602C12.7138 7.39736 12.7124 7.39868 12.7111 7.4L8.45912 11.652C8.24043 11.8707 7.88586 11.8707 7.66716 11.652C7.44847 11.4333 7.44847 11.0788 7.66716 10.8601L10.9672 7.56002L1.67914 7.56002C1.36986 7.56002 1.11914 7.3093 1.11914 7.00002Z"
          fill="currentcolor"
        />
      </svg>
    );
};

export default RightArrow;
