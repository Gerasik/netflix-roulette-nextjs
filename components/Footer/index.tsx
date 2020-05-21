import React, { ReactElement } from 'react';

import styles from './style.module.scss';

export default function Footer(): ReactElement {
  return (
    <footer>
      <span className={styles.text}>
        <strong>netflix</strong>
        roulette
      </span>
    </footer>
  );
}
