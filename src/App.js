import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { LayoutDefault } from './layouts/default';
import { Switch, Route } from 'react-router-dom';
import TopHeadline from './pages/topHeadline';
import Home from './pages/home';

function App() {
	return (
		<Router>
			<LayoutDefault>
				<Switch>
					<Route path="/top-headlines">
						<TopHeadline />
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
