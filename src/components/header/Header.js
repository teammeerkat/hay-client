import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import logo from '../../../assets/Timon-KH.jpg';

export default function Header() {
  return (
    <header className={styles.Header}>
      <Link to="/">
        <img src={logo} alt="logo"/>
      </Link>
    </header>
  );
}
