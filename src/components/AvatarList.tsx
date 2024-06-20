import React from 'react';
import Avatar from './Avatar';
import Typography from './Typography';

interface AvatarListProps {
  imageList: string[];
  additionalCount?: number;
  label?: string;
}

export function AvatarList({ imageList, additionalCount, label }: AvatarListProps) {
  return (
    <div className="avatar-list primary flex items-center">
      {imageList.map((url, index) => {
        return <Avatar url={url} key={index} />;
      })}
      {Boolean(additionalCount) && (
        <Typography>
          +{additionalCount} {label}
        </Typography>
      )}
    </div>
  );
}

export default AvatarList;
