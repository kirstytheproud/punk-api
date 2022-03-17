import React from 'react'
import "./FilterItem.scss"

const FilterItem = ({filterName, handleCheckBox}) => {

 
  
  return (
    
    <div className='filter-checkbox'>{filterName}
    <input type="checkbox" name={filterName} onChange={handleCheckBox} />
    </div>
  )
}

export default FilterItem;
