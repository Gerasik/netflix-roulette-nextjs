import React, { useEffect, FunctionComponent } from 'react';
import classNames from 'classnames';

import { Action } from 'containers/Search/models';
import MovieCard from 'components/MovieCard';
import styles from './style.module.scss';
import { BodyProps } from './models';

const Body: FunctionComponent<BodyProps> = ({ setStartData, moviesData, changeSortBy }) => {
  const { data, total, sortBy } = moviesData;

  useEffect(() => {
    setStartData();
  }, [setStartData]);

  return (
    <div className={styles['movie-container']}>
      <header className={styles['movie-header']}>
        <span className={styles['movie-count']}>{total ? `${total} movie found` : ''}</span>
        <div className={styles['movie-buttons']}>
          <span>sort by</span>
          <button
            type="button"
            className={classNames(styles['sort-release'], {
              [styles.active]: sortBy === 'release_date',
            })}
            onClick={(): Action.ChangeSortBy => changeSortBy('release_date')}
          >
            release date
          </button>
          <button
            type="button"
            className={classNames(styles['sort-rating'], {
              [styles.active]: sortBy === 'vote_average',
            })}
            onClick={(): Action.ChangeSortBy => changeSortBy('vote_average')}
          >
            rating
          </button>
        </div>
      </header>
      {!total ? (
        <div className={styles['movie-empty-result']}>
          <span>No films found</span>
        </div>
      ) : (
        <ul className={styles['movie-list']}>
          {data.map(item => (
            <li key={item.get('id')} className={styles['movie-item']}>
              <MovieCard data={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Body;
