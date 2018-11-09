import { all } from 'redux-saga/effects';

import { watchGetPoc } from './poc';
import { watchGetCategories, watchGetProducts } from './products';

export default function* rootSaga() {
  return yield all([
    watchGetPoc(),
    watchGetCategories(),
    watchGetProducts()
  ]);
}
