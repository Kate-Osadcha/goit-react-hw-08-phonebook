const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getLoading = state => state.contacts.loading;
const getError = state => state.contacts.error;

export const getfilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

// eslint-disable-next-line
export default {
  getContacts,
  getFilter,
  getLoading,
  getError,
  getfilteredContacts,
};
