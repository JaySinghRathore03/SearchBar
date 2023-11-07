import React from 'react'

import './ShipmentFilter.css';

const ShipmentFilter = (props) => {
    const dropDownChangeHandler =(event) =>{
        console.log(event.target.value);
        props.onChangeFilter(event.target.value);
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by Status</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value='Completed'>Completed</option>
          <option value='InCompleted'>InCompleted</option>
        </select>
      </div>
    </div>
  );
}
export default ShipmentFilter;