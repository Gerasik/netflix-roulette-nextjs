import React, { FunctionComponent, useEffect } from 'react';
import classNames from 'classnames';
import { debounce } from 'lodash';
import { useRouter } from 'next/router';

import { Action } from 'containers/Search/models';
import styles from './style.module.scss';
import { SearchProps } from './models';

const Search: FunctionComponent<SearchProps> = ({
  searchData,
  changeSearchString,
  changeSearchBy,
  setStartData,
}) => {
  const { searchBy, searchString } = searchData;
  const router = useRouter();
  const { query } = router.query;

  useEffect(() => {
    changeSearchString(query as string);
    setStartData();
  }, [query]);

  function handleClickSearch(): void {
    setStartData();
  }

  function handleChangeSearch(event): void {
    const searchString = event.target.value;
    const href =
      window.location.href.slice(-6) === 'search' ? `search/${searchString}` : searchString;

    window.history.pushState(null, '', href || '/search');
    setStartData();
  }

  function debounceEvent(...arg) {
    const fn = arg[0];
    const debounceEvent = debounce(fn, 500);
    return e => {
      changeSearchString(e.target.value);
      e.persist();
      return debounceEvent(e);
    };
  }

  return (
    <div className={styles.root}>
      <p className={styles.label}>find your movie</p>
      <div className={styles['search-form']}>
        <input
          value={searchString}
          type="text"
          placeholder="Search"
          className={styles['search-text']}
          onChange={debounceEvent(handleChangeSearch)}
        />
        <button type="button" className={styles['search-button']} onClick={handleClickSearch}>
          search
        </button>
      </div>
      <div className={styles['search-by']}>
        <span>search by</span>
        <button
          type="button"
          className={classNames(styles['by-title'], { [styles.active]: searchBy === 'title' })}
          onClick={(): Action.ChangeSearchBy => changeSearchBy('title')}
        >
          title
        </button>
        <button
          type="button"
          className={classNames(styles['by-genre'], { [styles.active]: searchBy === 'genres' })}
          onClick={(): Action.ChangeSearchBy => changeSearchBy('genres')}
        >
          genre
        </button>
      </div>
    </div>
  );
};

export default Search;
