import axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { loadProductsError, loadProductsSuccess } from '../action';

function* getProducts() {
  try {
    const response: AxiosResponse = yield call(
      axios.get,
      'http://localhost:8080/products',
    );
    yield put(loadProductsSuccess(response.data));
  } catch (error) {
    yield put(loadProductsError(`Get products failure: ${error.message}`));
  }
}

function* index(): any {
  yield takeLatest('LOAD_PRODUCTS_REQUEST', getProducts);
}

export default index;
