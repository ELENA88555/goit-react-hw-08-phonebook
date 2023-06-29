import css from './ContactList.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectVisibleContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import { deleteContactThunk, fetchContactsThunk } from 'redux/operations';


export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectVisibleContacts);
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);



  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const btnDeleteHandler =contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  return (
    <ul className={css.list}>
      {loading && <p>loading ...</p>}

      {contactsList.length > 0 ? (
        contactsList.map(({ id, name, number }) => (
          <li key={id} className={css.item} id={id} >
            <p className={css.text}>{name}</p>
            <p className={css.text}>{number}</p>
            <button
            //  id={contactId}
              type="button"
              className={css.btnDelete}
              onClick={ () => btnDeleteHandler(id)}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <p>{error}</p>
      )}
    </ul>
  );
};
