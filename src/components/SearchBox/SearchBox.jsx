import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const searchBoxID = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  return (
    <label className={css.searchBox} htmlFor={searchBoxID}>
      Find contacts
      <input
        type="text"
        id={searchBoxID}
        name="searchBox"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
};

export default SearchBox;
