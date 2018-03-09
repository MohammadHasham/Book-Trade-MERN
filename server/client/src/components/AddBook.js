import React, { Component } from 'react';
import { addBooks, current } from '../actions';
import { connect } from 'react-redux';
var books = require('google-books-search-2');
class AddBook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ''
		};
	}
	componentWillMount() {
		this.props.current();
	}
	getBooks() {
		books
			.search(this.state.name, { limit: 1 })
			.then(results => {
				this.props.addBooks(results);
			})
			.catch(function(error) {});
	}
	mapBooks() {
		if (!this.props.books) return <h1>No Books to show</h1>;
		return this.props.books.map(item => {
			return (
				<div className="col-md-4" key={item._id}>
					<h3>{item.title}</h3>
					<img style={{ display: 'block' }} src={item.thumbnail} />
				</div>
			);
		});
	}
	render() {
		return (
			<div>
				<h1 className="text-center">Add Books</h1>
				<input
					type="text"
					value={this.state.name}
					onChange={e => this.setState({ name: e.target.value })}
					placeholder="Add a book"
				/>
				<button className="btn btn-primary" onClick={this.getBooks.bind(this)}>
					Add
				</button>
				<div className="row">{this.mapBooks()}</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	console.log(state);
	return { books: state.selectBooks };
}
export default connect(mapStateToProps, { addBooks, current })(AddBook);
