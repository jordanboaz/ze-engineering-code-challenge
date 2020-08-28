import { Location, Product } from '../types';

export type RootStackParamList = {
  Presentation: undefined;
  Home: {
    address: {
      title: string;
      subtitle?: string;
      location: Location;
      id: string;
    };
  };
  Details: {
    product: Product;
  };
};
