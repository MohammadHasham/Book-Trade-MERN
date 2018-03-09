import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBooks, allBooks } from '../actions';
import axios from 'axios';
import { Link } from 'react-router-dom';
var books = require('google-books-search-2');
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '', isLogged: false };
	}
	componentWillMount() {
		axios.get('/api/getuser').then(response => {
			console.log(response);
			this.setState({ isLogged: response.data });
		});
	}

	render() {
		console.log(this.state.isLogged);
		if (!this.state.isLogged) {
			return (
				<nav className="navbar navbar-expand-sm bg-light navbar-light">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="navbar-brand" href="#">
								FCC Books Trading
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Home
							</a>
						</li>
					</ul>
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-link" href="/regForm">
								Sign In
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/signup">
								Sign Up
							</a>
						</li>
					</ul>
				</nav>
			);
		}
		if (this.state.isLogged) {
			return (
				<nav className="navbar navbar-expand-sm bg-light navbar-light">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="navbar-brand" href="#">
								FCC Books Trading
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Home
							</a>
						</li>
					</ul>
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-link" href="/books">
								All Books
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/addbook">
								My Books
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/updateprofile">
								Update Profile
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/signout">
								Sign Out
							</a>
						</li>
					</ul>
				</nav>
			);
		}
	}
}
export default connect(null, { addBooks, allBooks })(Header);
