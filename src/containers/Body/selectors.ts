import Immutable from 'immutable';
import { createSelector } from 'reselect';

import { searchSortBy } from 'containers/Search/selectors';
import * as Models from 'models';
import { State } from './models';

const moviesResponse = (state): Models.MoviesResponseMap => {
  return (state.get('bodyReducer') as State).get('moviesResponse');
};

export const moviesData = createSelector(
  moviesResponse,
  searchSortBy,
  (moviesResponse, searchSortBy) => ({
    data: moviesResponse.get('data') || Immutable.List(),
    total: moviesResponse.get('total') || 0,
    sortBy: searchSortBy,
  })
);
