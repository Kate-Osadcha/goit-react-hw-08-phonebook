import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getfilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
