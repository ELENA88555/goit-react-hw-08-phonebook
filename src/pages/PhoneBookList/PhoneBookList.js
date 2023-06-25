import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectIsLoading } from 'redux/selectors';
import { fetchContactsThunk } from 'redux/operations';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { ContactList } from 'components/ContactList/ContactList';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch( fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <AddContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}