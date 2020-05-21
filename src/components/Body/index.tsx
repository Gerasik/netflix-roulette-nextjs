import React, { useEffect, FunctionComponent } from 'react';
import classNames from 'classnames';
import _ from 'lodash';

import { Action } from 'containers/Search/models';
import MovieCard from 'components/MovieCard';
import styles from './style.module.scss';
import { BodyProps } from './models';

const Body: FunctionComponent<BodyProps> = ({
  setStartData,
  moviesData,
  changeSortBy,
  addData,
}) => {
  const { data, total, sortBy } = moviesData;

  const bodyAction = _.throttle(() => checkAddContent(), 300);

  useEffect(() => {
    document.addEventListener('scroll', bodyAction);
    return (): void => {
      document.removeEventListener('scroll', bodyAction);
    };
  }, [setStartData]);

  function checkAddContent(): void {
    const lengthToBottom = document.body.clientHeight - window.innerHeight - window.scrollY;
    if (lengthToBottom < 100) {
      addData();
    }
  }

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
          {data && data.size % 3 === 2 ? <li className={styles['movie-item']} /> : null}
        </ul>
      )}
    </div>
  );
};

export default Body;
