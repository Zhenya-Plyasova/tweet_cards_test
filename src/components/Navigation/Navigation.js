import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'

export const Navigation = () => {
  return (
    <header>
      <nav className={css.linkWrapper}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="/tweets">
          Tweets
        </NavLink>
      </nav>
    </header>
  );
};
