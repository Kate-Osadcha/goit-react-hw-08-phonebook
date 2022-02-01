import { useSelector } from 'react-redux';

import { contactsSelectors } from '../../redux/contacts';

import s from './AddContactButton.module.scss';

const AddContactButton = () => {
  const isLoading = useSelector(state => contactsSelectors.getLoading(state));

  return (
    <div className={s.button__wrapper}>
      <button type="submit" className={s.button} disabled={isLoading}>
        Add contact
      </button>
    </div>
  );
};

export default AddContactButton;
