import { compose, createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { Task } from 'redux-saga';
import { combineReducers } from 'redux-immutable';
import { watchFetchData, watchInput } from './sagas';
import bodyReducer from '../containers/Body/reducer';
import searchReducer from '../containers/Search/reducer';
import { persistStore, autoRehydrate } from 'redux-persist-immutable';
import { fromJS } from 'immutable';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const rootReducers = combineReducers({
  bodyReducer,
  searchReducer,
});

const initState = fromJS({
  bodyReducer: fromJS({
    moviesResponse: {},
  }),
  searchReducer: fromJS({
    searchString: '',
    searchBy: 'genres',
    sortBy: 'vote_average',
  }),
});

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducers,
    initState,
    compose(composeWithDevTools(applyMiddleware(sagaMiddleware)), autoRehydrate())
  );

  (store as SagaStore).sagaTask = sagaMiddleware.run(watchFetchData);
  (store as SagaStore).sagaTask = sagaMiddleware.run(watchInput);

  return store;
}

// persistStore(store, { key: 'root', whiteList: ['searchReducer'] });

export default configureStore;
