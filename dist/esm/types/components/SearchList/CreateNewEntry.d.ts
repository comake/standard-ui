import React from 'react';
export interface CreateNewEntryProps {
    children: React.ReactNode;
    handleBack: () => void;
    label?: string;
    className?: string;
}
export declare function CreateNewEntry(props: CreateNewEntryProps): React.JSX.Element;
export default CreateNewEntry;
