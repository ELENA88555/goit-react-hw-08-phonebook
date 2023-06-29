import { useDispatch } from 'react-redux';
import css from './LoginForm.module.css';
import { logIn } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    try {
      await
       dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      )
      .unwrap();
      navigate('/');
    } catch (error) {
      alert('Error login');
    }

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input className={css.inputForm} type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input className={css.inputForm} type="password" name="password" />
      </label>
      <button className={css.btnForm} type="submit">Log In</button>
    </form>
  );
};
