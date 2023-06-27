import { useAuth } from 'hooks/useAuth';
import css from './Home.module.css';
import { Link } from 'react-router-dom';
import photo from "../../images/photo.jpg.jpg"


export default function Home() {
  const { isLoggedIn, user } = useAuth();

  return (
    <div className={css.container}>
        <img className={css.photo} src={photo} width={600}  alt="Phone book" />
      {isLoggedIn ? (
        <p>
         Hello
         
         <span className={css.text}> {user.name}!</span>   <br/>  Go to the{' '}
          <Link className={css.link} to="/contacts">
            contacts
          </Link>
        </p>
      ) : (
        <p>
          Plase
          <Link to="/login" className={css.link}>
          <span> login</span> 
          </Link>
         <span> or </span> 
          <Link className={css.link} to="/register">
          <span> register </span>  
          </Link>
         </p>
      )}
    </div>
  );
}