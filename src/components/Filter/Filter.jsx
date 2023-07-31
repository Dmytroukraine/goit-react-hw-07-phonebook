import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filter-selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onSetFilter = payload => {
    dispatch(setFilter(payload));
  };

  const updateFilter = event => {
    onSetFilter(event.target.value);
  };

  return (
    <div className={css.search}>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
      </label>
      <div className={css.searchContainer}>
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          onChange={updateFilter}
          value={filter}
          placeholder="Search..."
        />
        <button type="reset"></button>
      </div>
    </div>
  );
};

export default Filter;
