export default interface ICList {
  items: ICItem[];
  active: number;
}

export interface ICItem {
  id: string;
  name: string;
}
