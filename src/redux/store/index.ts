import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from '../sagas';
import rootReducer from '../ducks';

const sagaMiddleware = createSagaMiddleware();

const middleWare = [sagaMiddleware];
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleWare)));
sagaMiddleware.run(sagas);

export { store };
