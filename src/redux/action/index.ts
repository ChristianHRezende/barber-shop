import { Action, Product } from '../reducers/types';

export const loadProductsRequest = (): Action => ({
  type: 'LOAD_PRODUCTS_REQUEST',
});

export const loadProductsSuccess = (data: Array<Product>): Action => ({
  type: 'LOAD_PRODUCTS_SUCCESS',
  results: data,
});

export const loadProductsError = (error: string): Action => ({
  type: 'LOAD_PRODUCTS_FAILURE',
  error,
});
