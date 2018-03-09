import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestBook, allBooks } from '../actions';
import { Link } from 'react-router-dom';
class DisplayBooks extends Component {
	constructor() {
		super();
		this.state = { name: '' };
	}
	componentWillMount() {
		this.props.allBooks();
	}
	request = id => {
		this.props.requestBook(id);
	};
	mapBooks() {
		if (!this.props.books) return <h1>No Books to show</h1>;
		return this.props.books.map(item => {
			return (
				<div className="col-md-4" key={item._id}>
					<h3>{item.title}</h3>
					<img style={{ display: 'block' }} src={item.thumbnail} />
					<button
						style={{ marginTop: '2%' }}
						className="btn btn-primary"
						onClick={() => this.request(item._id)}>
						Request Book
					</button>
				</div>
			);
		});
	}
	render() {
		return (
			<div>
				<div className="row">
					<Link
						className="btn btn-primary"
						style={{ margin: '2%' }}
						to="/traderequests">
						Your Trade Requests
					</Link>
					<Link
						className="btn btn-primary"
						style={{ margin: '2%' }}
						to="/PendingRequests">
						Trade Requests For You
					</Link>
				</div>
				<div className="row">{this.mapBooks()}</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	console.log(state);
	return { books: state.AllBooksReducer };
}
export default connect(mapStateToProps, { requestBook, allBooks })(
	DisplayBooks
);
