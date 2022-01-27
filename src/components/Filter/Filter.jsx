import PropTypes from 'prop-types';
import s from './Filter.module.scss';

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.filter}>
      <h2 className={s.title}>Contacts</h2>

      <label className={s.label}>
        <span className={s.label__text}>Find contacts by name</span>
        <input
          type="text"
          name="filter"
          placeholder="Find..."
          className={s.input}
          value={value}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
    </div>
  );
};
Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
