import css from './ContactList.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectVisibleContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import { deleteContactThunk, fetchContactsThunk } from 'redux/operations';
// import { nanoid } from '@reduxjs/toolkit';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectVisibleContacts);
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);
  // const contactId = nanoid()


  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const btnDeleteHandler = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  return (
    <ul className={css.list}>
      {loading && <p>loading ...</p>}

      {contactsList.length > 0 ? (
        contactsList.map(({ contactId, name, number }) => (
          <li key={contactId} className={css.item}  id={contactId}>
            <p className={css.text}>{name}</p>
            <p className={css.text}>{number}</p>
            <button
              type="button"
              className={css.btnDelete}
              onClick={() => btnDeleteHandler(contactId)}
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
