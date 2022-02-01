import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';

import { authOperations } from '../../redux/auth/';

import s from './LoginForm.module.scss';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = ({ onLogin }) => {
  const [state, setState] = useState(initialState);
  const { email, password } = state;

  const hanldeChange = event => {
    const { name, value } = event.target;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const hanldeSubmit = event => {
    event.preventDefault();

    onLogin(state);

    resetForm();
  };

  const resetForm = () => {
    setState(initialState);
  };

  return (
    <form className={s.form} onSubmit={hanldeSubmit}>
      <label className={s.label}>
        <span className={s.text}>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={hanldeChange}
          className={s.input}
          placeholder="Your e-mail"
          aria-label="Input for your email"
          required
        />
      </label>

      <label className={s.label}>
        <span className={s.text}>Password</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={hanldeChange}
          className={s.input}
          placeholder="Your password"
          aria-label="Input for your password"
          required
        />
      </label>

      <div className={s.container}>
        <button type="submit" className={s.button}>
          Log in
        </button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginForm);
