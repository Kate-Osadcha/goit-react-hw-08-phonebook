import { Oval } from 'react-loader-spinner';

import s from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={s.loader}>
      <Oval color="#2196f3" height={100} width={100} />
    </div>
  );
};

export default Loader;
