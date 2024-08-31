export default interface ICNavigation {
  items: INavigationItem[];
}

export interface INavigationItem {
  to: string;
  label: string;
  icon: string;
}
