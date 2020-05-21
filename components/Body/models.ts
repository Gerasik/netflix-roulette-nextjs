import * as Models from 'models';
import * as BodyModels from 'containers/Body/models';
import * as SearchModels from 'containers/Search/models';

interface MoviesData {
  data: Models.MoviesDataMap;
  total: number;
  sortBy: string;
}
export interface BodyProps {
  moviesData: MoviesData;
  setStartData: BodyModels.ActionCreator.SetStartData;
  changeSortBy: SearchModels.ActionCreator.ChangeSortBy;
}
