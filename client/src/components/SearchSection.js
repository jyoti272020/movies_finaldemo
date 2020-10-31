import React from 'react';
import { InputGroup, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function SearchSection(props) {
	const { onChangeSearchValue, onKeyPressSearchValue, onClickSearch } = props;
	return (
		<section className="search-section">
			<InputGroup>
				<Input
					placeholder="Type to search for movies"
					onChange={onChangeSearchValue}
					onKeyPress={onKeyPressSearchValue}
				/>
				<Button color="primary" onClick={onClickSearch}>
					Search
				</Button>
				<Link to={`/add-movie`} className="btn btn-primary">
					Add Movie
				</Link>
			</InputGroup>
		</section>
	);
}
