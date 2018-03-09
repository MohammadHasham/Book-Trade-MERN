import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NotFound extends Component {
	render() {
		return (
			<div className="container-fluid">
				<h1 className="text-center" style={{ marginTop: '25%' }}>
					OOPS! you have landed somewhere wrong!
				</h1>
				<h2 className="text-center">
					<Link to="/">Go To Home</Link>
				</h2>
			</div>
		);
	}
}

export default NotFound;
