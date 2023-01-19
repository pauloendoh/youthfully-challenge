export interface IFilter {
  section: SectionType;
  sort: SortType;
  window: WindowType;
  onlyViralImages: boolean;
  page: number;
}

export type SectionType = "hot" | "top" | "user";
export type SortType = "viral" | "top" | "time" | "rising";
export type WindowType = "day" | "week" | "month" | "year" | "all";
