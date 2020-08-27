import { Product } from '../../types';
export interface Props {
  data: Product[];
  title: string;
}

export interface Item {
  title: string;
  price: string;
  promo: string;
  img: string;
}
