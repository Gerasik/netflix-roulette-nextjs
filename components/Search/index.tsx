import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { Action } from 'containers/Search/models';
import styles from './style.module.scss';
import { SearchProps } from './models';

const Search: FunctionComponent<SearchProps> = ({
  searchData,
  changeSearchString,
  changeSearchBy,
  setData,
}) => {
  const { searchString, searchBy, sortBy } = searchData;

  function handleClickSearch(): void {
    fetch(
      `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=asc&search=${searchString}&searchBy=${searchBy}&limit=6`
    )
      .then(response => response.json())
      .then(response => {
        setData(response);
      });
  }

  return (
    <div className={styles.root}>
      <p className={styles.label}>find your movie</p>
      <div className={styles['search-form']}>
        <input
          type="text"
          placeholder="Search"
          className={styles['search-text']}
          onChange={(event): Action.ChangeSearchString => changeSearchString(event.target.value)}
          value={searchString}
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
