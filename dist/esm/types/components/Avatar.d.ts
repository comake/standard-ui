import React from "react";
type AvatarSizeVariant = "s";
interface AvatarProps {
    url: string;
    size?: AvatarSizeVariant;
}
export declare function Avatar({ url, size }: AvatarProps): React.JSX.Element;
export default Avatar;
