import React, { useEffect, FunctionComponent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRouter } from 'next/router';

import imagePlaceholder from 'assets/image_placeholder.png';
import { FilmProps } from './models';

import styles from './style.module.scss';
import { fromJS } from 'immutable';

const Film = ({ filmData, setFilmId }) => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setFilmId(Number(id));
    window.scrollTo(0, 0);
  }, [id]);

  const [imgError, setImgError] = useState(true);

  if (!filmData || !filmData.has('id')) return <span> No data found</span>;

  const imagePath = filmData.get('poster_path');
  const poster_path = imagePath || imagePlaceholder;
  const title = filmData.get('title');
  const rating = filmData.get('vote_average');
  const smallDescription = filmData.get('tagline');
  const year = new Date(filmData.get('release_date')).getFullYear();
  const runtime = filmData.get('runtime') || 0;
  const overview = filmData.get('overview');

  const image = imgError ? (
    <picture className={styles.picture} style={imagePath ? { backgroundColor: 'inherit' } : {}}>
      <source srcSet={poster_path} media="(min-width: 600px)" />
      <img
        src={poster_path}
        width={imagePath ? '100%' : '50%'}
        alt={title}
        onError={(): void => setImgError(true)}
      />
    </picture>
  ) : (
    <picture className={styles.picture}>
      <source srcSet={imagePlaceholder} media="(min-width: 600px)" />
      <img src={imagePlaceholder} width="50%" alt="error load" />
    </picture>
  );

  return (
    <div className={styles.container}>
      {image}
      <div className={styles.info}>
        <div className={styles['title-container']}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.round}>
            <span className={styles.rating}>{rating}</span>
          </div>
        </div>
        <span className={styles.smallDescription}>{smallDescription}</span>
        <div className={styles.parameters}>
          <span className={styles.year}>{year}</span>
          <span className={styles.runtime}>{`${runtime} min`}</span>
        </div>
        <p className={styles.overview}>{overview}</p>
      </div>
    </div>
  );
};

export default Film;
