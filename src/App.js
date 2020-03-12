import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { LayoutDefault } from './layouts/default';
import { Switch, Route } from 'react-router-dom';
import TopHeadline from './pages/topHeadline';
import Home from './pages/home';
import { Register } from './pages/register';
import { GET_USER_LOCAL_STORAGE } from './store/actions/user';
import { useDispatch } from 'react-redux';
import Profile from './pages/profile';

function App() {
	const dispatch = useDispatch();

	dispatch({
		type: GET_USER_LOCAL_STORAGE
	})

	return (
		<Router>
			<LayoutDefault>
				<Switch>
					<Route path="/top-headlines">
						<TopHeadline />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/profile">
						<Profile />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</LayoutDefault>
		</Router>
	);
}

export default App;
