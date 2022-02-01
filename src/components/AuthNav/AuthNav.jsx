import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import s from './AuthNav.module.scss';

// Компонент меню регистрации и авторизации
const AuthNav = () => (
  <ul className={s.list}>
    <li className={s.item}>
      <NavLink
        to={routes.register}
        className={s.link}
        activeclassnamee={s['link--active']}
      >
        Sign up
      </NavLink>
    </li>

    <li className={s.item}>
      <NavLink
        exact
        to={routes.login}
        className={s.link}
        activeclassname={s['link--active']}
      >
        Log in
      </NavLink>
    </li>
  </ul>
);

export default AuthNav;
