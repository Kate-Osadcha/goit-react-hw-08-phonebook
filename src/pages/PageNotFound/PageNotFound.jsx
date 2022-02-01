import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import Title from '../../components/Title';
import { ReactComponent as SpaceImage } from '../../icons/404.svg';

import s from './PageNotFound.module.scss';

// Компонент страницы 404
const PageNotFound = () => (
  <div className={s.container}>
    <Title>Houston, we have had an ERROR</Title>

    <div className={s.thumb}>
      <SpaceImage title="Error 404" alt="Error 404" className={s.image} />
    </div>

    <p className={s.text}>
      The page you are looking for was removed, renamed, or got lost in space.
    </p>

    <NavLink
      to={routes.home}
      className={s.button}
      title="Return to Home"
      aria-label="Return to Home page"
    >
      Return to Home
    </NavLink>
  </div>
);

export default PageNotFound;
