import ActionType from './constants';
import { ActionCreator } from './models';

export const changeSearchString: ActionCreator.ChangeSearchString = payload => ({
  type: ActionType.CHANGE_SEARCH_STRING,
  payload,
});

export const changeSearchBy: ActionCreator.ChangeSearchBy = payload => ({
  type: ActionType.CHANGE_SEARCH_BY,
  payload,
});

export const changeSortBy: ActionCreator.ChangeSortBy = payload => ({
  type: ActionType.CHANGE_SORT_BY,
  payload,
});
