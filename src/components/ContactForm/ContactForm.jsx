import { useState } from 'react';
import PropTypes from 'prop-types';

import AddContactButton from '../AddContactButton';

import s from './ContactForm.module.scss';

const initialState = {
  name: '',
  number: '',
};

const ContactForm = ({ contacts, onSubmit }) => {
  const [state, setState] = useState(initialState);
  const { name, number } = state;

  const hanldeChange = event => {
    const { name, value } = event.currentTarget;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const hanldeSubmit = event => {
    event.preventDefault();

    const normalizedName = name.toLowerCase();

    // Проверка на дубликат по имени
    const nameInContacts = contacts.find(
      contact => contact.name === normalizedName,
    );

    // Проверка на дубликат по номеру
    const numberInContacts = contacts.find(
      contact => contact.number === number,
    );

    // Отправка данных после проверки в экшн
    if (!nameInContacts && !numberInContacts) {
      onSubmit(normalizedName, number);
      resetForm();
      return;
    }
  };

  const resetForm = () => {
    setState(initialState);
  };

  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <form className={s.form} onSubmit={hanldeSubmit}>
        <label className={s.label}>
          <span className={s.label__text}>Name</span>
          <input
            type="text"
            name="name"
            placeholder="Contact name"
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
          <span className={s.label__text}>Number</span>
          <input
            type="tel"
            name="number"
            placeholder="Phone number"
            aria-label="Input for your phone number"
            className={s.input}
            value={number}
            onChange={hanldeChange}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>

        <AddContactButton />
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
