import React from 'react';
import Header from './components/Header/header';
import Home from './components/Home/home';
import Checkout from './components/Checkout/checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<Router>
			<div className="app">
      <Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/checkout">
						<Checkout />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
