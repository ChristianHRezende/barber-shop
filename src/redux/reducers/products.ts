import { Action, ProductsState } from './types';

const INITIAL_STATE: ProductsState = {
  data: [],
  isLoading: false,
  error: undefined,
};

const products = (state = INITIAL_STATE, action: Action): ProductsState => {
  if (action.type === 'LOAD_PRODUCTS_REQUEST') {
    return {
      data: [],
      isLoading: true,
      error: undefined,
    };
  }
  if (action.type === 'LOAD_PRODUCTS_SUCCESS') {
    return {
      data: action.results,
      isLoading: false,
      error: undefined,
    };
  }
  if (action.type === 'LOAD_PRODUCTS_FAILURE') {
    return {
      data: [],
      isLoading: false,
      error: action.error,
    };
  }
  return state;
};

export default products;
