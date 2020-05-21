import Immutable from 'immutable';

export type Movie = {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
  genres: string[];
};

export type MovieMap = Immutable.Record<Omit<Movie, 'genres'> & { genres: Immutable.List<string> }>;
