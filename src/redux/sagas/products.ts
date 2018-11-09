// saga
import { takeEvery, put, select } from 'redux-saga/effects';

// graphql
import { PRODUCTS_QUERY, CATERORIES_QUERY } from '@queries';
import client from '@apollo/client';

// redux
import { Types } from '@redux/types';
import { Creators as Actions } from '@redux/actions/products';

// interfaces
import { IProductsGetRequest, ICategoriesGetRequest } from '@interfaces/products';
import { IReduxState } from '@interfaces/reduxState';

export function* watchGetProducts() {
  yield takeEvery(Types.PRODUCTS_GET_REQUEST, getProducts);
}

export function* watchGetCategories() {
  yield takeEvery(Types.CATEGORIES_GET_REQUEST, getCategories);
}

function* getProducts(action: IProductsGetRequest) {
  try {
    const { data } = yield select((state: IReduxState) => {
      return state.poc;
    });
    const { categoryId } = action.payload;
    const variables = {
      id: data[0].id,
      search: "",
      categoryId: categoryId
    };

    const products = yield client.query({ query: PRODUCTS_QUERY, variables });
    yield put(Actions.getProductsSuccess(products.data.poc.products));
  } catch (err) {
    console.log(err);
    yield put(Actions.getProductsFailure(err));
  }
}

function* getCategories(action: ICategoriesGetRequest) {
  try {

    const categories = yield client.query({ query: CATERORIES_QUERY });
    yield put(Actions.getCategoriesSuccess(categories.data.allCategory));
  } catch (err) {
    console.log(err);
    yield put(Actions.getCategoriesFailure(err));
  }
}
