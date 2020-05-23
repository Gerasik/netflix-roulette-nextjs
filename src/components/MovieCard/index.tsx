import React, { FunctionComponent, useState } from 'react';
import Link from 'next/link';
import _ from 'lodash';

import imagePlaceholder from 'assets/image_placeholder.png';
import styles from './style.module.scss';
import { MovieCardProps } from './models';

const MovieCard: FunctionComponent<MovieCardProps> = ({ data }) => {
  const title = data.get('title');
  const posterPath = data.get('poster_path');
  const releaseDate = data.get('release_date');
  const genresUniq = _.uniq(data.get('genres').toArray());
  const id = data.get('id');

  const [imgError, setImgError] = useState(true);

  const image = imgError ? (
    <img
      src={posterPath}
      alt={title}
      className={styles.image}
      onError={(): void => setImgError(false)}
    />
  ) : (
    <div className={styles.error}>
      <img className={styles['error-image']} src={imagePlaceholder} alt="Error load" />
    </div>
  );

  return (
    <div className={styles.item}>
      {image}
      <div className={styles.container}>
        <Link href="/film/[id]" as={`/film/${id}`}>
          <a className={styles.title}>{title}</a>
        </Link>
        <span className={styles.date}>{new Date(releaseDate).getFullYear()}</span>
      </div>
      <div className={styles['genre-list']}>
        {genresUniq.map(item => {
          return (
            <span key={item} className={styles.genre}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;
