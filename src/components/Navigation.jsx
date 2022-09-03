import React from 'react';
import { useSelector } from 'react-redux';
import {authSelectors} from '../redux/auth';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <div>
      {isLoggedIn &&
        <NavLink
          to="/contacts"
          style={styles.link}
          activestyle={styles.activeLink}>
          PhoneBook
        </NavLink>}
    </div>
  );
}; 