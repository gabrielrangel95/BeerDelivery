import { all } from 'redux-saga/effects';

import { watchGetPoc } from './poc';

export default function* rootSaga() {
  return yield all([
    watchGetPoc()
  ]);
}
