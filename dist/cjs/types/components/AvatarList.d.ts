import React from 'react';
interface AvatarListProps {
    imageList: string[];
    additionalCount?: number;
    label?: string;
}
export declare function AvatarList({ imageList, additionalCount, label }: AvatarListProps): React.JSX.Element;
export default AvatarList;
