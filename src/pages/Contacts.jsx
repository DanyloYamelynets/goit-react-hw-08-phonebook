import { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import ContactList from 'components/Contacts/ContactList';
import {
  Container,
  PhonebookTitle,
  ContactsTitle,
} from 'components/Container/ContainerStyled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from 'redux/contacts/contactsOperations';
import { setFilter } from 'redux/contacts/contactsSlice';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { selectUserData } from 'redux/auth/userSelectors';
import withAuthRedirect from 'HOC/withAuthRedirect';

const Contacts = () => {
  const userData = useSelector(selectUserData);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData) return;

    dispatch(fetchContactsThunk());
  }, [dispatch, userData]);

  const onAddContact = contactData => {
    const { name } = contactData;
    const checkName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContactThunk(contactData));
    }
  };
  const onFilter = filterContacts => {
    dispatch(setFilter(filterContacts));
  };
  const onDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm onAddContact={onAddContact} />
      <ContactsTitle>Contacts</ContactsTitle>
      {isLoading && <Loader />}
      {error && <div>Error: {error}</div>}
      <Filter
        filter={filter}
        onFilter={onFilter}
        title="Find contacts by name"
      />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </Container>
  );
};
export default withAuthRedirect(Contacts);
