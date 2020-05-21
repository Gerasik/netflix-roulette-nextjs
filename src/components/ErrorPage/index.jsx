import React from 'react';
import styles from './styles.module.scss';

const ErrorPage = () => {
  return (
    <h1 className={styles.error}>
      <span className={styles.code}>404</span>
      Page not found
    </h1>
  );
};

export default ErrorPage;
