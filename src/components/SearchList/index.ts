export * from "./SearchListLocal";
export * from "./SearchListLocalPopup";
export * from "./SearchListNetwork";

export interface SearchListItem {
  title: string;
  description?: string;
  subtitle?: string;
  externalLink?: string;
  meta?: any;
  id: string;
}
