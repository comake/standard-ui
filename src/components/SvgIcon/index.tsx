import React, { ComponentType, FC, useMemo } from "react";
import Search from "./Search";
import MoreHorizontal from "./MoreHorizontal";
import Trash from "./Trash";
import EyeOpen from "./EyeOpen";
import EyeClose from "./EyeClose";
import Help from "./Help";
import ChevronDown from "./ChevronDown";
import ChevronUp from "./ChevronUp";
import UpArrow from "./UpArrow";
import DownArrow from "./DownArrow";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Filter from "./Filter";
import SortCountAscending from "./SortCountAscending";
import SortCountDescending from "./SortCountDescending";
import Comment from "./Comment";
import Check from "./Check";
import ChevronRight from "./ChevronRight";
import Ellipsis from "./Ellipsis";
import Close from "./Close";
import Home from "./Home";
import ChevronLeft from "./ChevronLeft";
import QuestionCircle from "./QuestionCircle";
import SuccessCheck from "./SuccessCheck";
import Error from "./Error";
import Info from "./Info";
import Expand from "./Expand";
import Lightning from "./Lightning";
import External from "./External";
import List from "./List";
import Code from "./Code";
import Copy from "./Copy";
import Download from "./Download";
import DragHandle from "./DragHandle";
import Layout from "./Layout";
import Sort from "./Sort";
import Group from "./Group";
import Lock from "./Lock";
import Link from "./Link";
import Pencil from "./Pencil";
import ArrowDownSolid from "./ArrowDownSolid";
import ArrowTopRight from "./ArrowTopRight";
import Overlay from "./Overlay";
import Plus from "./Plus";
import Transform from "./Transform";
import Play from "./Play";
import Plug from "./Plug";
import Commit from "./Commit";
import Table from "./Table";
import Graph from "./Graph";
import Fork from "./Fork";
import CircularProgress from "../CircularProgress";
import ArrowRightSolid from "./ArrowRightSolid";
import PlusSolid from "./PlusSolid";
import Empty from "./Empty";
import Menu from "./Menu";
import IssueOpen from "./IssueOpen";

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

const IconMap = {
  progress: CircularProgress,
  table: Table,
  search: Search,
  moreHorizontal: MoreHorizontal,
  arrowDownSolid: ArrowDownSolid,
  arrowRightSolid: ArrowRightSolid,
  trash: Trash,
  eyeOpen: EyeOpen,
  eyeClose: EyeClose,
  help: Help,
  filter: Filter,
  pencil: Pencil,
  group: Group,
  rightArrow: RightArrow,
  leftArrow: LeftArrow,
  lock: Lock,
  link: Link,
  plus: Plus,
  upArrow: UpArrow,
  downArrow: DownArrow,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  external: External,
  sort: Sort,
  sortCountAscending: SortCountAscending,
  sortCountDescending: SortCountDescending,
  comment: Comment,
  check: Check,
  ellipsis: Ellipsis,
  close: Close,
  home: Home,
  questionCircle: QuestionCircle,
  successCheck: SuccessCheck,
  error: Error,
  info: Info,
  expand: Expand,
  lightning: Lightning,
  list: List,
  layout: Layout,
  code: Code,
  copy: Copy,
  download: Download,
  dragHandle: DragHandle,
  arrowTopRight: ArrowTopRight,
  overlay: Overlay,
  transform: Transform,
  play: Play,
  plug: Plug,
  commit: Commit,
  graph: Graph,
  fork: Fork,
  plusSolid: PlusSolid,
  empty: Empty,
  menu: Menu,
  issueOpen: IssueOpen,
} as const;
export type SvgIconProps = SvgSupportedIconProps | SvgExternalIconProps;

export const SvgIcon: FC<SvgIconProps> = (props) => {
  const { Icon, icon, iconProps } = useMemo(() => {
    if ("icon" in props) {
      const { icon, ...iconProps } = props;
      if (icon in IconMap) {
        return { Icon: IconMap[icon], iconProps };
      } else {
        return { icon, iconProps: {} };
      }
    } else if ("ExternalIcon" in props) {
      return { Icon: props.ExternalIcon, iconProps: {} };
    }
    return { icon: "", iconProps: {} };
  }, []);

  if (!Icon) return <>{icon}</>;
  return <Icon {...iconProps} />;
};

export default SvgIcon;
