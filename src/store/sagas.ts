import { fromJS } from 'immutable';
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { takeEvery, select, put, delay, ForkEffect, takeLatest } from 'redux-saga/effects';

import * as Models from 'models';
import { SearchState } from 'containers/Search/models';

import { fetchData, getFilmData } from './services';
import { setData } from 'containers/Body/actions';
import { setFilmData } from 'containers/Film/actions';
import ActionTypeBody from 'containers/Body/constants';
import ActionTypeSearch from 'containers/Search/constants';
import ActionTypeFilm from 'containers/Film/constants';

export function* watchFetchData(): Models.WatchFetchData {
  yield takeEvery([ActionTypeSearch.CHANGE_SORT_BY, ActionTypeBody.SET_START_DATA], getState);
  yield takeLatest([ActionTypeBody.ADD_DATA], getAddData);
}

export function* watchFilmId(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery([ActionTypeFilm.SET_FILM_ID], (...attr) => setFilmResponse(attr[0]));
}

export function* setFilmResponse(action) {
  const data = yield getFilmData(action.payload);
  yield put(setFilmData(data));
}

export const getSearchData = (state): SearchState => ({
  searchString: state.getIn(['searchReducer', 'searchString']),
  searchBy: state.getIn(['searchReducer', 'searchBy']),
  sortBy: state.getIn(['searchReducer', 'sortBy']),
});

export function* getState() {
  const { searchString, searchBy, sortBy } = yield select(getSearchData);
  const emptyResult = {
    data: [],
    total: 0,
    offset: 0,
    limit: 0,
  };
  let action = setData(emptyResult);
  if (searchString) {
    const paramsStr = searchString
      ? `sortBy=${sortBy}&sortOrder=desc&search=${searchString}&searchBy=${searchBy}&`
      : '';
    const searchStr = `https://reactjs-cdp.herokuapp.com/movies?${paramsStr}limit=6`;
    const payload = yield fetchData(searchStr);
    action = setData(payload);
  }

  yield put(action);
}

export const getMovieData = (state): SearchState => ({
  searchString: state.getIn(['searchReducer', 'searchString']),
  searchBy: state.getIn(['searchReducer', 'searchBy']),
  sortBy: state.getIn(['searchReducer', 'sortBy']),
});

function* getAddData() {
  const { data, total } = yield select(getBodyData);
  const { searchString, searchBy, sortBy } = yield select(getSearchData);
  const paramsStr = searchString
    ? `sortBy=${sortBy}&sortOrder=desc&search=${searchString}&searchBy=${searchBy}&offset=${data.size}&`
    : '';
  if (data.size < total) {
    const searchStr = `https://reactjs-cdp.herokuapp.com/movies?${paramsStr}limit=6`;
    const payload = yield fetchData(searchStr);
    yield put(setData(payload));
  }
}

const getBodyData = state => {
  const bodyData = state.get('bodyReducer').get('moviesResponse');
  return {
    data: bodyData.get('data'),
    total: bodyData.get('total'),
    offset: bodyData.get('offset'),
    limit: bodyData.get('limit'),
  };
};
