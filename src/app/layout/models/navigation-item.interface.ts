export interface NavigationItem {
  id: string;
  order: number;
  icon: string;
  class_name: string;
  label: string;
  url: string;
  childItems: childItems[];
}

export class childItems {
  sys: {
    id: number;
  }
}
