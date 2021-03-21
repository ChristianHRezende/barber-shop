export type ProductsState = {
  data?: Array<Product> | [];
  isLoading: boolean;
  error?: string;
};

export type Product = {
  _id: string;
  name: string;
  description: string;
  img: string;
  price: string;
};

export type Action =
  | { type: 'LOAD_PRODUCTS_REQUEST' }
  | { type: 'LOAD_PRODUCTS_SUCCESS'; results: Array<Product> }
  | { type: 'LOAD_PRODUCTS_FAILURE'; error: string };
