import { createSelector } from 'reselect';

import { State } from './models';

export const filmData = (state): State => {
  return state.get('filmData') as State;
};

export const searchData = createSelector(filmData, filmData => ({
  filmData,
}));
