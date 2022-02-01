import { NavLink } from 'react-router-dom';

import Title from '../../components/Title';

import routes from '../../routes';

import s from './HomePage.module.scss';

// Компонент главной страницы
const HomePage = () => (
  <main>
    <section className={s.container}>
      <Title>Phonebook</Title>

      <p className={s.text}>Fast and Mobile Friendly React Application</p>

      <NavLink
        to={routes.contacts}
        className={s.button}
        title="Try it now!"
        aria-label="Go to contacts"
      >
        Try it now!
      </NavLink>
    </section>
  </main>
);

export default HomePage;
