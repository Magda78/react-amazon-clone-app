import React, {useEffect} from 'react';
import Header from './components/Header/header';
import Home from './components/Home/home';
import Checkout from './components/Checkout/checkout';
import Payment from './components/Payment/payment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/login';
import './App.css';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HYvl8LnOOmb4AwPUBJpQo3s6TKDdcTAHg3ExipDIg7Sd0oRFa5uc1K5g5LKOL6IuCncKJUWGJ0RxQtNmCFqiqjy00jS7UkApt');

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run just once when app is loaded
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>>>', authUser);
      if(authUser) {
        //the user just logged/the user was logged
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
        //the user is loggout
      }
    })
  },[])
	return (
		<Router>
			<div className="app">
      {/*<Header /> here only when we wont on the top of every page*/}
				<Switch>
					<Route exact path="/">
            <Header />
						<Home />
					</Route>
          <Route path ='/login'>
            <Login />
          </Route>
					<Route path="/checkout">
            <Header />
						<Checkout />
					</Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
