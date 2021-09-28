import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg';
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React meals</h1>
        <HeaderCartButton />
      </header>
      <img
        className={classes['main-image']}
        src={mealsImage}
        alt="header pic"
      />
    </Fragment>
  );
};

export default Header;
