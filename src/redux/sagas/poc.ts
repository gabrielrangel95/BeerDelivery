// saga
import { takeEvery, put } from 'redux-saga/effects';

// graphql
import { POC_QUERY } from '@queries';
import client from '@apollo/client';

// redux
import { Types } from '@redux/types';
import { Creators as Actions } from '@redux/actions/poc';
// interfaces
import { IPocRequest } from '@interfaces/poc';

export function* watchGetPoc() {
  yield takeEvery(Types.POC_GET_REQUEST, getPocs);
}

function* getPocs(action: IPocRequest) {
  try {
    const { params } = action.payload;
    const variables = {
      algorithm: "NEAREST",
      lat: String(params.lat),
      long: String(params.long),
      now: new Date().toISOString()
    };
    const result = yield client.query({ query: POC_QUERY, variables });
    yield put(Actions.getPocSuccess(result.data.pocSearch));
  } catch (err) {
    console.log(err);
    yield put(Actions.getPocFailure(err));
  }
}
