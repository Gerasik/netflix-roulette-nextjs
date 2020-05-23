import React from 'react';
import _ from 'lodash';

import { useRouter } from 'next/router';
import Logo from 'components/Logo';
import styles from './style.module.scss';
import headerIMG from 'assets/header_background.jpg';

const Header = ({ children }) => {
  const router = useRouter();
  const arr = router.asPath.split('/') || null;

  return (
    <div className={styles['header-background']}>
      <img src={headerIMG} alt="posters" className={styles['background-image']} />
      <nav className={styles['header-nav']}>
        <Logo />
        {!arr.some(item => item === 'search') ? (
          <button onClick={() => router.back()} className={styles['search-icon']} />
        ) : null}
      </nav>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

Header.getInitialProps = props => {
  console.log(props);
};

export default Header;
