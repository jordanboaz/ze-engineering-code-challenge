export interface Poc {
  id: string;
  products: Product[];
}

export interface Product {
  id: string;
  title: string;
  images: Image[];
  productVariants: ProductVariants[];
}

export interface ProductVariants {
  price: number;
  title: string;
  subtitle: string;
}

interface Image {
  url: string;
}

export interface Category {
  title: string;
  id: number;
}
