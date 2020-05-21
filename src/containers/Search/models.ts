import Immutable from 'immutable';

import * as Models from 'models';

export type SearchState = {
  searchString: string;
  searchBy: string;
  sortBy: string;
};

export type State = Immutable.Record<SearchState>;

export namespace Payload {
  export type ChangeSearchString = string;
  export type ChangeSearchBy = string;
  export type ChangeSortBy = string;
}

export namespace Action {
  export type ChangeSearchString = Models.IAction<Payload.ChangeSearchString>;
  export type ChangeSearchBy = Models.IAction<Payload.ChangeSearchBy>;
  export type ChangeSortBy = Models.IAction<Payload.ChangeSortBy>;
}
export namespace ActionCreator {
  export type ChangeSearchString = (
    payload: Payload.ChangeSearchString
  ) => Action.ChangeSearchString;
  export type ChangeSearchBy = (payload: Payload.ChangeSearchBy) => Action.ChangeSearchBy;
  export type ChangeSortBy = (payload: Payload.ChangeSortBy) => Action.ChangeSortBy;
}
