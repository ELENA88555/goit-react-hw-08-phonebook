import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { fetchContactsThunk } from 'redux/operations';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './PhoneBook.module.css';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';

export default function Tasks() {
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
//     <div className={css.thumble}>
//       <h1 className={css.title}>Phonebook</h1>

//       <AddContactForm></AddContactForm>
//       <h2 className={css.titleText}> Contacts</h2>

//       {contacts.length < 1 ? (
//         <p className={css.textApp}> You have no contacts saved</p>
//       ) : (
//         <>
//           <Filter></Filter>
//           <div className={css.containerWrapper}>
//             <ContactList></ContactList>
//           </div>
