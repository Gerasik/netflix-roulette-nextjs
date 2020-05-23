import { MovieMap } from 'models';
import * as FilmModels from 'containers/Film/models';

export interface FilmProps {
  filmData: MovieMap;
  setFilmId: FilmModels.ActionCreator.SetFilmId;
}
