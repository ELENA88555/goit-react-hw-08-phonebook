import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { fetchContactsThunk } from 'redux/operations';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './PhoneBook.module.css';


export default function PhonebookList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <title className={css.title}> Phonebook</title>
      <AddContactForm />
      <h2 className={css.titleText}> Contacts</h2>
      <Filter></Filter>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}

