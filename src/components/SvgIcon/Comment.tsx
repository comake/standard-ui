import React, { type FC } from 'react';
import { IconProps } from '.';

const Comment: FC<IconProps> = (props) => {
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
        
        d="M9.2829 11.8864C9.41793 11.7513 9.60106 11.6755 9.79202 11.6755H14.4006C14.4961 11.6755 14.5877 11.6375 14.6553 11.57C14.7228 11.5024 14.7608 11.4108 14.7608 11.3152V3.5999C14.7608 3.40145 14.599 3.23965 14.4006 3.23965H3.59908C3.40063 3.23965 3.23883 3.40145 3.23883 3.5999V11.3152C3.23883 11.4108 3.27678 11.5024 3.34434 11.57C3.4119 11.6375 3.50353 11.6755 3.59908 11.6755H5.96497C6.16379 11.6755 6.32497 11.8367 6.32497 12.0355V14.7004C6.32508 14.712 6.3286 14.7234 6.33509 14.7331C6.34166 14.7429 6.351 14.7506 6.36192 14.7551C6.37284 14.7596 6.38486 14.7608 6.39645 14.7585C6.4079 14.7562 6.41843 14.7507 6.42675 14.7425L6.42708 14.7422L9.2829 11.8864ZM4.88497 14.7028V13.1155H3.59908C3.12162 13.1155 2.66372 12.9258 2.32611 12.5882C1.9885 12.2506 1.79883 11.7927 1.79883 11.3152V3.5999C1.79883 2.60616 2.60534 1.79965 3.59908 1.79965H14.4006C15.3943 1.79965 16.2008 2.60616 16.2008 3.5999V11.3152C16.2008 11.7927 16.0111 12.2506 15.6735 12.5882C15.3359 12.9258 14.878 13.1155 14.4006 13.1155H10.0903L7.44337 15.7624C7.23357 15.9714 6.96659 16.1136 6.67608 16.1711C6.38557 16.2286 6.08453 16.1988 5.81092 16.0855C5.53731 15.9722 5.30337 15.7804 5.13859 15.5343C4.97381 15.2883 4.88556 14.9989 4.88497 14.7028Z"
        fill="currentcolor"
      />
    </svg>
  );
};

export default Comment;
