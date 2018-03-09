import React, { Component } from 'react';
import { getMyRequests, cancelRequest } from '../actions';
import { connect } from 'react-redux';
class TradeRequests extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.props.getMyRequests();
	}
	renderRequest() {
		console.log(this.props.arr);
		if (!this.props.arr) return <h1> Oops!</h1>;
		return this.props.arr.map(item => {
			return (
				<div className="col-md-4">
					<h2>{item.title}</h2>
					<img src={item.thumbnail} />
					<button
						className="btn btn-primary"
						onClick={() => this.props.cancelRequest(item.books_id)}>
						Cancel Request
					</button>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<h1>Trade Requests</h1>
				<div className="row">{this.renderRequest()}</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return { arr: state.GetMyRequestsReducer };
}
export default connect(mapStateToProps, {
	getMyRequests,
	cancelRequest
})(TradeRequests);
