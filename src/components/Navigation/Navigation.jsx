import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { authSelectors } from '../../redux/auth';
import routes from '../../routes';

import s from './Navigation.module.scss';

// Компонент главной навигации (меню) приложения
const Navigation = ({ isAuthenticated }) => (
  <nav>
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink
          exact
          to={routes.home}
          className={s.link}
          activeclassname={s['link--active']}
        >
          Home
        </NavLink>
      </li>

      {isAuthenticated && (
        <li>
          <NavLink
            to={routes.contacts}
            className={s.link}
            activeclassname={s['link--active']}
          >
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  </nav>
);

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(Navigation);
