import React from 'react';

import style from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filter/filter-selectors';
import { filterContactAction } from '../../redux/filter/filter-slice';

const Filter = () => {
  const filterValue = useSelector(selectFilter);
 const  dispatch = useDispatch()
  
  return (
    <div className={style.searchContainer}>
      <label  className={style.search}>
        <input
        className={style.inputName}
        title="Enter search name"
        type="text"
        name="filter"
        placeholder=" "
        value={filterValue}
        onChange={(e)=> dispatch(filterContactAction(e.target.value))}
      />
      <button type="reset"></button>
      </label>
      
    </div>
  );
};



export default Filter;