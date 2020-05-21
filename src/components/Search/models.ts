import * as SearchModels from 'containers/Search/models';
import * as BodyModels from 'containers/Body/models';

interface SearchData {
  searchString: string;
  searchBy: string;
  sortBy: string;
}

export interface SearchProps {
  searchData: SearchData;
  changeSearchString: SearchModels.ActionCreator.ChangeSearchString;
  changeSearchBy: SearchModels.ActionCreator.ChangeSearchBy;
  setStartData: BodyModels.ActionCreator.SetStartData;
}
