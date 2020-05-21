import { select, take } from 'redux-saga/effects';

import ActionTypeSearch from '../../containers/Search/constants';
import { getState, getSearchData, watchInput } from '../../store/sagas';

describe('test saga getState', () => {
  const generator = getState();
  it('should return 1 iteration', () => {
    expect(generator.next().value).toStrictEqual(select(getSearchData));
  });
  // generator.next();
  // it('should be done on next iteration', () => {
  //   expect(generator.next().done).toBeTruthy();
  // });
});

describe('test saga watchInput', () => {
  const generator = watchInput();
  it('should return 1 iteration', () => {
    expect(generator.next().value).toStrictEqual(take(ActionTypeSearch.CHANGE_SEARCH_STRING));
  });
});
