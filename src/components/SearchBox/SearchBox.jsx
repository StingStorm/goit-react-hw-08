import { useId } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  const searchBoxID = useId();
  return (
    <label className={css.searchBox} htmlFor={searchBoxID}>
      Find contacts
      <input
        type="text"
        id={searchBoxID}
        name="searchBox"
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </label>
  );
};

export default SearchBox;
