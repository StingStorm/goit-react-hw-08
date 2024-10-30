import { FallingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <FallingLines color="#00d8ff" width="150" visible={true} />
    </div>
  );
};

export default Loader;
