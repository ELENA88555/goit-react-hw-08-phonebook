import css from './Home.module.css';




export default function Home() {
  return (
    <div  className={css.homePage}>
      <h1 className={css.title}>
        Your PHONEBOOCK
        <span role="img" aria-label="Greeting icon">
          
        </span>
      </h1>
    </div>
  );
}