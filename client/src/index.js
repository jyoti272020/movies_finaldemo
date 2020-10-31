import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import App from './App';
import { Route, Router, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import MovieDetails from './components/MovieDetails';
import AddMovie from './components/AddMovie';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

const history = createBrowserHistory();

const rootElement = document.getElementById('root');
ReactDOM.render(
	<React.StrictMode>
		<Router history={history}>
			<main>
				<Switch>
					<Route path="/add-movie">
						<AddMovie />
					</Route>
					<Route path="/booking-page/:movieId">
						<MovieDetails />
					</Route>
					<Route path="/">
						<App />
					</Route>
				</Switch>
			</main>
		</Router>
	</React.StrictMode>,
	rootElement
);
