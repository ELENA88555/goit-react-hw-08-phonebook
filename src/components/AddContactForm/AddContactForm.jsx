import React from 'react';
import { nanoid } from 'nanoid';
import css from './AddContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContactThunk } from 'redux/operations';

const loginInputId = nanoid();

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmitForm = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    contacts.find(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    )
      ? alert(`${name} is alredy in contact`)
      : dispatch(addContactThunk(newContact));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmitForm}>
      <div className={css.container}>
        <label htmlFor={loginInputId}>
          <span className={css.labelName}>Name</span>{' '}
        </label>
        <input
          id={loginInputId}
          type="text"
          name="name"
          className={css.inputForm}
          // value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>

      <div className={css.container}>
        <label className={css.wrape} htmlFor={loginInputId}>
          {' '}
          <span className={css.labelName}> Number </span>
        </label>

        <input
          className={css.inputForm}
          id={loginInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button type="submit" className={css.btnForm}>
        Add contact
      </button>
    </form>
  );
};
