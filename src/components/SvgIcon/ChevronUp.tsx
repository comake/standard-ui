import React, { type FC } from 'react';
import { IconProps } from '.';

const ChevronUp: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        
        d="M7.99844 4.11952C7.81433 4.11952 7.63022 4.19315 7.505 4.33308L1.79728 10.1734C1.67209 10.2986 1.59844 10.4606 1.59844 10.6447C1.59844 11.0277 1.89303 11.3223 2.27601 11.3223C2.45277 11.3223 2.62952 11.2486 2.75471 11.1308L7.99844 5.76924L13.2422 11.1308C13.3674 11.2486 13.5368 11.3223 13.7209 11.3223C14.1038 11.3223 14.3984 11.0277 14.3984 10.6447C14.3984 10.4606 14.3248 10.2986 14.1996 10.166L8.49187 4.33308C8.35195 4.19315 8.18993 4.11952 7.99844 4.11952Z"
        fill="currentcolor"
      />
    </svg>
  );
};

export default ChevronUp;
