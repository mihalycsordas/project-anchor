export interface NavigationItem {
  order: number;
  icon: string;
  class_name: string;
  label: string;
  url?: string;
  child_Items: NavigationItem[];
}
