import { Hourglass } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <Hourglass
        colors={['#4E5D72', '#c65c5c']}
        width="150"
        height="150"
        visible={true}
      />
    </div>
  );
};

export default Loader;
