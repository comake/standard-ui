import React from 'react';
interface ToggleProps {
    onToggle: () => void;
    isActive: boolean;
}
export declare function Toggle({ isActive, onToggle }: ToggleProps): React.JSX.Element;
export default Toggle;
