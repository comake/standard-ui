import React, { type FC } from 'react';
import Button, { ButtonProps } from './Button';
import { twMerge } from 'tailwind-merge';

export interface ButtonsSetProps {
	buttons: ButtonProps[];
	className?: string;
}

export const ButtonsSet: FC<ButtonsSetProps> = ({ buttons, className }) => {
	return <div className={className}>{
		buttons.map(({ children, ...buttonProps }, index) =>
			<Button
				{...buttonProps}
				className={twMerge(
					buttonProps.className,
					index !== 0 ? 'border-l-0' : '',
					index === 0 ? 'rounded-l rounded-r-none' : '',
					index === buttons.length - 1 ? 'rounded-l-none rounded-r' : '',
					index !== 0 && index !== buttons.length - 1 ? 'rounded-none' : ''
				)}
				key={index}
			>
				{children}
			</Button>
		)
	}
	</div>;
};

export default ButtonsSet;