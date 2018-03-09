import React, { Component } from 'react';
import Redux from 'redux';
import RegForm from './components/RegForm';
import Header from './components/Header';
import DisplayBooks from './components/DisplayBooks';
import PendingRequests from './components/PendingRequests';
import AddBook from './components/AddBook';
import Home from './components/Home';
import SignUp from './components/SignUp';
import ProfileForm from './components/ProfileForm';
import TradeRequests from './components/TradeRequests';
import NotFound from './components/NotFound';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Home} />
						<Route exact path="/registration" component={RegForm} />
						<Route exact path="/updateprofile" component={ProfileForm} />
						<Route exact path="/books" component={DisplayBooks} />
						<Route exact path="/addbook" component={AddBook} />
						<Route exact path="/PendingRequests" component={PendingRequests} />
						<Route exact path="/traderequests" component={TradeRequests} />
						<Route exact path="/regForm" component={RegForm} />
						<Route exact path="/signup" component={SignUp} />
						<Route path="*" component={NotFound} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
