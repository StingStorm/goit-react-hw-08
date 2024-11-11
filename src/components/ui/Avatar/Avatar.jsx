import { getRandomColor } from '../../../utils/getRandomColor';
import css from './Avatar.module.css';
import PersonIcon from '@mui/icons-material/Person';

const Avatar = ({ children, width = '', height = '' }) => {
  return (
    <div
      className={css.avatar}
      style={{
        backgroundColor: getRandomColor(),
        width: width,
        height: height,
        fontSize: `${
          [...height].filter(char => !isNaN(char)).join('') / 2.5
        }px`,
      }}
    >
      {children ? children : <PersonIcon />}
    </div>
  );
};

export default Avatar;
