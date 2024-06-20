import React, { useMemo } from "react";

type AvatarSizeVariant = "s";

interface AvatarProps {
  url: string;
  size?: AvatarSizeVariant;
}

const sizeClassMapping: Record<AvatarSizeVariant, string> = {
  s: "h-8",
};

export function Avatar({ url, size = "s" }: AvatarProps) {
  const className = useMemo(
    () => `rounded-full aspect-square ${sizeClassMapping[size]}`,
    [size]
  );

  return <img alt="" src={url} className={className} />;
}

export default Avatar;
