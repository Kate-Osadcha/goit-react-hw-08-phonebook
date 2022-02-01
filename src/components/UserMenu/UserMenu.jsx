import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import s from './UserMenu.module.scss';

// Компонент меню пользователя после авторизации
const UserMenu = ({ email, onLogOut }) => (
  <div className={s.profile}>
    <div className={s.thumb}>
      <img
        src={`https://eu.ui-avatars.com/api/?background=191818c2&color=fff&&length=1&name=${email}`}
        alt="avatar"
        title="Your avatar"
        className={s.avatar}
      />
    </div>

    <span className={s.welcome}>
      Welcome, <span className={s.email}>{email}</span>
    </span>

    <button
      type="button"
      title="Log out"
      aria-label="Log out"
      onClick={onLogOut}
      className={s.button}
    >
      Logout
    </button>
  </div>
);

UserMenu.propTypes = {
  email: PropTypes.string.isRequired,
  onLogOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogOut: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
