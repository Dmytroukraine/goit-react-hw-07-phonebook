import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../Redux/filter/filter-slice';
import { selectFilter } from '../Redux/filter/filter-selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onSetFilter = (payload) => {
    dispatch(setFilter(payload));
  };

  const updateFilter = (event) => {
    onSetFilter(event.target.value);
  };

  return (
    <div className={css.searchWrapper}>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        onChange={updateFilter}
        value={filter}
      />
    </div>
  );
};

export default Filter;
