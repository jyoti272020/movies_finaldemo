import React, { useEffect, useState } from 'react';
import { Container, Form } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function AddMovie() {
	const history = useHistory();

	const [ title, setTitle ] = useState('');
	const [ year, setYear ] = useState('');
	const [ poster, setPoster ] = useState('');
	const [ imdbID, setimdbId ] = useState('');
	const [ type, setType ] = useState('');

	async function addMovie() {
		axios
			.post(`http://localhost:5000/addMovie`, {
				title,
				year,
				poster,
				imdbID,
				type
			})
			.then((res) => {
				console.log(res);
                console.log(res.data);
                alert('Movie added succesfully');
			});
	}

	return (
		<Container>
			<h1>Adding Movie</h1>
			<Form>
				<label for="name">
					Movie Name
					<span aria-hidden="true" required="">
					*
					</span>
				</label>

				<input
					id="name"
					required=""
					type="text"
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<br />
				<label for="name">
					Movie Year
					<span aria-hidden="true" required="">
              *
            </span>
				</label>
				<input
					id="name"
					required=""
					type="text"
					onChange={(e) => {
						setYear(e.target.value);
					}}
				/>
				<br />
				<label for="name">
					Movie imdbId
					<span aria-hidden="true" required="">
						*
					</span>
				</label>
				<input
					id="name"
					required=""
					type="text"
					onChange={(e) => {
						setimdbId(e.target.value);
					}}
				/>
				<br />
				<label for="name">
					Movie Type
					<span aria-hidden="true" required="">
						*
					</span>
				</label>
				<input
					id="name"
					required=""
					type="text"
					onChange={(e) => {
						setType(e.target.value);
					}}
				/>
				<br />
				<label for="name">
					Movie Poster
					<span aria-hidden="true" required="">
						*
					</span>
				</label>
				<input
					id="name"
					required=""
					type="text"
					onChange={(e) => {
						setPoster(e.target.value);
					}}
				/>
				<br />
				<button
					type="button"
					color="btn btn-primary"
					className="btn btn btn-primary -margin m-2"
					onClick={addMovie}
				>
					Add Movie
				</button>
				<button type="button" className="btn btn-danger" onClick={() => history.goBack()}>
					Go Back
				</button>
			</Form>
		</Container>
	);
}
