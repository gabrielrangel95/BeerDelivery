// saga
import { takeEvery, put, select } from 'redux-saga/effects';

// graphql
import { PRODUCTS_QUERY, CATERORIES_QUERY } from '@queries';
import client from '@apollo/client';

// redux
import { Types } from '@redux/types';
import { Creators as Actions } from '@redux/actions/products';

// interfaces
import { IProductsGetRequest, ICategoriesGetRequest, IProduct, IProductVariants } from '@interfaces/products';
import { IReduxState } from '@interfaces/reduxState';

export function* watchGetProducts() {
  yield takeEvery(Types.PRODUCTS_GET_REQUEST, getProducts);
}

export function* watchGetCategories() {
  yield takeEvery(Types.CATEGORIES_GET_REQUEST, getCategories);
}

function* getProducts(action: IProductsGetRequest) {
  try {
    // get the pocs data
    const { data } = yield select((state: IReduxState) => {
      return state.poc;
    });
    const { categoryId } = action.payload;
    const variables = {
      id: data[0].id, // first poc id from the pocs data array
      search: "",
      categoryId: categoryId
    };

    const result = yield client.query({ query: PRODUCTS_QUERY, variables });
    const productsArray = result.data.poc.products;
    let products: Array<IProductVariants> = [];
    productsArray.forEach((element: IProduct) => {
      const item = element.productVariants[0];
      products.push(item);
    });
    console.log(products);
    yield put(Actions.getProductsSuccess(products));
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
