import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';

import { authOperations } from '../../redux/auth';

import s from './RegisterForm.module.scss';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ onRegister }) => {
  const [state, setState] = useState(initialState);
  const { name, email, password } = state;

  const hanldeChange = event => {
    const { name, value } = event.target;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const hanldeSubmit = event => {
    event.preventDefault();

    onRegister(state);

    resetForm();
  };

  const resetForm = () => {
    setState(initialState);
  };

  return (
    <form className={s.form} onSubmit={hanldeSubmit}>
      <label className={s.label}>
        <span className={s.text}>Name</span>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          aria-label="Input for your name"
          className={s.input}
          value={name}
          onChange={hanldeChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className={s.label}>
        <span className={s.text}>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={hanldeChange}
          className={s.input}
          placeholder="Your e-mail"
          aria-label="Input for your Email"
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
          placeholder="Should be at least 7 characters"
          aria-label="Input for your password"
          required
        />
      </label>

      <div className={s.container}>
        <button type="submit" className={s.button}>
          Create account
        </button>
      </div>
    </form>
  );
};

RegisterForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterForm);
