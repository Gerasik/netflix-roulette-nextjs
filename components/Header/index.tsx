import React, { FunctionComponent } from 'react';

import Logo from '../../components/Logo';
import styles from './style.module.scss';
import headerIMG from '../../assets/header_background.jpg';

const Header: FunctionComponent = ({ children }) => {
  return (
    <div className={styles['header-background']}>
      <img src={headerIMG} alt="posters" className={styles['background-image']} />
      <Logo />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Header;
