import React, { FunctionComponent } from 'react';

import styles from './style.module.scss';

const Logo: FunctionComponent = () => {
  return (
    <h1 className={styles.logo}>
      <strong>netflix</strong>
      roulette
    </h1>
  );
};

export default Logo;
