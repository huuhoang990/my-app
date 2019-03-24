import React, { useState } from 'react';

export default function SearchBar() {
	const [state, setStrText] = useState("");

	const handleChange = event => {
		setStrText(event.target.value)
		console.log(state);
	}
	
	const handleSubmit = event => {
		alert('A name was submitted: ' + state);
		event.preventDefault();
	}

	return (
		<form action="#"  onSubmit={handleSubmit} className="shop-search">
			<input type="text" placeholder="Your keyword...." value={state.value} onChange={handleChange} />
			<button><i className="fa fa-search"></i></button>
		</form>
	);
}