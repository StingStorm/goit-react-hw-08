import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  const searchBoxID = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  return (
    <TextField
      className={css.searchBox}
      label="Find contacts"
      id={searchBoxID}
      name="searchBox"
      value={filter}
      fullWidth
      size="small"
      color="border"
      onChange={e => dispatch(changeFilter(e.target.value))}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SearchBox;
