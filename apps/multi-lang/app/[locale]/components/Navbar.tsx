import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
      </div>

      <div className={styles.lang}>
        <Link href={'/en'} locale="en">
          English
        </Link>
        <Link href={'/ja'} locale="ja">
          japaneses
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
