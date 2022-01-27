import { connect } from 'react-redux';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
