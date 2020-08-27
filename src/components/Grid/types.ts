export interface Props {
  numColumns: number;
  data: Item[];
}

export interface Item {
  title: string;
  icon?: string;
}
