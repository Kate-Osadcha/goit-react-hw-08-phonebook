import s from './AppFooter.module.scss';

// Компонент футера
const AppFooter = () => {
  return (
    <footer className={s.footer}>
      <small className={s.text}>
        &copy; {new Date().getFullYear()} Developed with{' '}
        <span role="img" aria-label="heart" className={s.heart}>
          ❤
        </span>
        by
        <a
          href="https://github.com/Kate-Osadcha"
          target="_blank"
          rel="noopener noreferrer"
          title="Github profile"
          aria-label="Link to Github profile"
          className={s.link}
        >
          <span className={s.name}> Osadcha Kate</span>
        </a>
      </small>
    </footer>
  );
};

export default AppFooter;
