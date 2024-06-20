import React, { type FC } from 'react';
import { IconProps } from '.';

const ChevronDown: FC<IconProps> = (props) => {
    return (
        <svg
            className={props.className}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                
                d="M8.00156 11.9625C8.18567 11.9625 8.36978 11.8889 8.495 11.749L14.2027 5.90866C14.3279 5.78347 14.4016 5.62145 14.4016 5.43731C14.4016 5.05436 14.107 4.75977 13.724 4.75977C13.5472 4.75977 13.3705 4.83342 13.2453 4.95123L8.00156 10.3128L2.75784 4.95123C2.63262 4.83342 2.46325 4.75977 2.27914 4.75977C1.89615 4.75977 1.60156 5.05436 1.60156 5.43731C1.60156 5.62145 1.67522 5.78347 1.80041 5.91601L7.50813 11.749C7.64805 11.8889 7.81007 11.9625 8.00156 11.9625Z"
                fill="currentcolor" />
        </svg>
    );
};

export default ChevronDown;
