import { takeEvery, select, put, cancel, fork, take, delay } from 'redux-saga/effects';

import * as Models from '../models';
import { SearchState } from '../containers/Search/models';

import { setData } from '../containers/Body/actions';
import ActionTypeBody from '../containers/Body/constants';
import ActionTypeSearch from '../containers/Search/constants';

export function* watchFetchData(): Models.WatchFetchData {
  yield delay(100);
  yield takeEvery(
    [
      ActionTypeSearch.CHANGE_SORT_BY,
      ActionTypeSearch.CHANGE_SEARCH_BY,
      ActionTypeBody.SET_START_DATA,
    ],
    getState
  );
}

export const getSearchData = (state): SearchState => ({
  searchString: state.getIn(['searchReducer', 'searchString']),
  searchBy: state.getIn(['searchReducer', 'searchBy']),
  sortBy: state.getIn(['searchReducer', 'sortBy']),
});

function fetchData(url: string): Models.FetchData {
  return fetch(url)
    .then(response => response.json())
    .then(response => {
      return response;
    });
}

export function* getState() {
  const { searchString, searchBy, sortBy } = yield select(getSearchData);
  const searchStr = `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=asc&search=${searchString}&searchBy=${searchBy}&limit=6`;
  const payload = yield fetchData(searchStr);
  const action = setData(payload);

  yield put(action);
}

function* handleInput(): Models.HandleInput {
  yield delay(1500);
  yield getState();
}

export function* watchInput(): Models.WatchInput {
  let task;
  while (true) {
    yield take(ActionTypeSearch.CHANGE_SEARCH_STRING);
    if (task) {
      yield cancel(task);
    }
    task = yield fork(handleInput);
  }
}
