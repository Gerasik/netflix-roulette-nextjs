import Immutable from 'immutable';

import { Movie, MovieMap } from './Movie';

export type MoviesData = Movie[];
export type MoviesDataMap = Immutable.List<MovieMap>;

export type MoviesResponse = {
  data: MoviesData;
  total: number;
  offset: number;
  limit: number;
};

export type MoviesResponseMap = Immutable.Record<
  Omit<MoviesResponse, 'data'> & { data: MoviesDataMap }
>;
