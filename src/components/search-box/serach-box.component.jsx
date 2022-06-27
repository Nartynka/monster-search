import React from 'react';

import './search-box.style.css';

export const SearchBox = ({handleChange, placeholder}) => (
	<input
		type='search'
		placeholder={placeholder}
		className='search-box'
		onChange={handleChange}
	/>
);
