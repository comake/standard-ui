import React, { ComponentType, FC } from 'react';
import ArrowDownSolid from './ArrowDownSolid';
import ArrowTopRight from './ArrowTopRight';
import Overlay from './Overlay';
import Plus from './Plus';
import Commit from './Commit';
import Table from './Table';
import Graph from './Graph';
import Fork from './Fork';
import ArrowRightSolid from './ArrowRightSolid';
import PlusSolid from './PlusSolid';
import Empty from './Empty';
import Menu from './Menu';
import IssueOpen from './IssueOpen';
export interface SvgSupportedIconProps extends IconProps {
    icon: keyof typeof IconMap;
}
export interface SvgExternalIconProps extends IconProps {
    ExternalIcon: ComponentType;
}
export interface IconProps {
    className?: string;
    title?: string;
}
declare const IconMap: {
    readonly progress: React.FC<import("../CircularProgress").CircularProgressProps>;
    readonly table: typeof Table;
    readonly search: React.FC<IconProps>;
    readonly moreHorizontal: React.FC<IconProps>;
    readonly arrowDownSolid: typeof ArrowDownSolid;
    readonly arrowRightSolid: typeof ArrowRightSolid;
    readonly trash: React.FC<IconProps>;
    readonly eyeOpen: React.FC<IconProps>;
    readonly eyeClose: React.FC<IconProps>;
    readonly help: React.FC<IconProps>;
    readonly filter: React.FC<IconProps>;
    readonly pencil: React.FC<IconProps>;
    readonly group: React.FC<IconProps>;
    readonly rightArrow: React.FC<IconProps>;
    readonly leftArrow: React.FC<IconProps>;
    readonly lock: React.FC<IconProps>;
    readonly link: React.FC<IconProps>;
    readonly plus: typeof Plus;
    readonly upArrow: React.FC<IconProps>;
    readonly downArrow: React.FC<IconProps>;
    readonly chevronDown: React.FC<IconProps>;
    readonly chevronUp: React.FC<IconProps>;
    readonly chevronRight: React.FC<IconProps>;
    readonly chevronLeft: React.FC<IconProps>;
    readonly checkSquare: React.FC<IconProps>;
    readonly external: React.FC<IconProps>;
    readonly sort: React.FC<IconProps>;
    readonly sortCountAscending: React.FC<IconProps>;
    readonly sortCountDescending: React.FC<IconProps>;
    readonly comment: React.FC<IconProps>;
    readonly check: React.FC<IconProps>;
    readonly ellipsis: React.FC<IconProps>;
    readonly close: React.FC<IconProps>;
    readonly home: React.FC<IconProps>;
    readonly questionCircle: React.FC<IconProps>;
    readonly successCheck: React.FC<IconProps>;
    readonly error: React.FC<IconProps>;
    readonly info: React.FC<IconProps>;
    readonly expand: React.FC<IconProps>;
    readonly lightning: React.FC<IconProps>;
    readonly list: React.FC<IconProps>;
    readonly layout: React.FC<IconProps>;
    readonly code: React.FC<IconProps>;
    readonly copy: React.FC<IconProps>;
    readonly download: React.FC<IconProps>;
    readonly dragHandle: React.FC<IconProps>;
    readonly arrowTopRight: typeof ArrowTopRight;
    readonly overlay: typeof Overlay;
    readonly transform: React.FC<IconProps>;
    readonly play: React.FC<IconProps>;
    readonly plug: React.FC<IconProps>;
    readonly commit: typeof Commit;
    readonly graph: typeof Graph;
    readonly fork: typeof Fork;
    readonly plusSolid: typeof PlusSolid;
    readonly empty: typeof Empty;
    readonly menu: typeof Menu;
    readonly issueOpen: typeof IssueOpen;
};
export type SvgIconProps = SvgSupportedIconProps | SvgExternalIconProps;
export declare const SvgIcon: FC<SvgIconProps>;
export default SvgIcon;
