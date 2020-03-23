import React from 'react';

const SearchBox = ({sfield, onSearch}) => {
	return (
		<div>
		<input onChange={onSearch} className="w-30 br4  pa3 b--blue bg-navy white calisto" type="search" placeholder="Find name or RollNumber"/>
		
		</div>
	);

}

export default SearchBox;