// always needed if jsx is present
import React, { Component } from 'react';

// this is a functional based component
/*
const SearchBar = () => {
	return <input />
};
*/

// this is a class based component
// this gives SearchBar a bunch of functionality that React.Component has
// use class when you want a component to have more than 1 functionality. otherwise use
// functional component. 
class SearchBar extends Component {
// this is the same as 'class SearchBar extends React.Component {' just as long as 
// it is being imported above.

	// to initialize state in a class based component. funtional components do not have state.

	constructor(props) {
		super(props);
		this.state = { term: '' };
	}

	// to define methods to a class
	render() {
		// manipulate state by 'this.setState'
		return (
			<div className='search-bar'>
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;