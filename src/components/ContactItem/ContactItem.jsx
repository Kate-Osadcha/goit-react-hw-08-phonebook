import PropTypes from 'prop-types';

import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import s from './ContactItem.module.scss';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={s.item}>
      <span className={s.name}>{contact.name}</span>
      <a href={`tel:${contact.number}`} className={s.number}>
        {contact.number}
      </a>

      <IconButton onClick={onDeleteContact} aria-label="Delete contact">
        <DeleteIcon width="16px" height="16px" fill="#a7a1a1" />
      </IconButton>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
