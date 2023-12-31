import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input className={css.inputForm}  type="text" name="name"  />
      </label>
      <label className={css.label}>
        Email
        <input className={css.inputForm} type="email" name="email"  />
      </label>
      <label className={css.label}>
        Password
        <input className={css.inputForm} type="password" name="password"  />
      </label>
      <button className={css.btnForm} type="submit">Register</button>
    </form>
  );
};
