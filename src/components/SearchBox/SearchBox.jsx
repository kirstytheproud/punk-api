import React from 'react'
import "./SearchBox.scss"

const SearchBox = props => {
  const {searchTerm, handleInput} = props;

  return (
    <div className='searchbox'>
      <input type="text" value={searchTerm} onInput={handleInput} placeholder='Search beers here' />
    </div>
  )
}

export default SearchBox;