import React, { useState, useEffect } from 'react';

export default function SearchBar(props) {
	const [searchText, setSearchText] = useState("");

	const handleChange = event => {
		setSearchText(event.target.value)
	}

	const handleSubmit = event => {
		event.preventDefault()
		let urlText = encodeURI(searchText)
		props.getSearchProducts(urlText)
	}

	return (
		<form action="#"  onSubmit={handleSubmit} className="shop-search">
			<input type="text" placeholder="Your keyword...." value={searchText.value} onChange={handleChange} />
			<button><i className="fa fa-search"></i></button>
		</form>
	);
}