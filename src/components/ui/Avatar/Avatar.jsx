import { generateColorById } from '../../../utils/getRandomColor';
import css from './Avatar.module.css';
import PersonIcon from '@mui/icons-material/Person';

const Avatar = ({ children, id, width = '', height = '', fontSize = null }) => {
  return (
    <div
      className={css.avatar}
      style={{
        backgroundColor: id ? generateColorById(id) : 'grey',
        width: width,
        height: height,
        fontSize:
          fontSize ??
          `${[...height].filter(char => !isNaN(char)).join('') / 3}px`,
      }}
    >
      {children || <PersonIcon fontSize={fontSize || 'small'} />}
    </div>
  );
};

export default Avatar;
