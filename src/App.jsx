import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { contactsOperations, contactsSelectors } from './redux/contacts';

import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Loader from './components/Loader';

const App = () => {
  const isLoadingContacts = useSelector(state =>
    contactsSelectors.getLoading(state),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <ContactForm />

      <Filter />

      <ContactList />

      {isLoadingContacts && <Loader />}
    </Container>
  );
};

export default App;
