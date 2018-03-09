import React, { Component } from 'react';
import {
	getPendingRequests,
	approveRequests,
	cancelPendingRequest
} from '../actions';
import { connect } from 'react-redux';
class PendingRequests extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.props.getPendingRequests();
	}
	approveRequest = (sendersId, title, thumbnail) => {
		this.props.approveRequests(title, sendersId, thumbnail);
	};
	renderRequests() {
		if (!this.props.PendingRequests) return <h1>Wait . . .</h1>;
		console.log(this.props.PendingRequests);
		return this.props.PendingRequests.map(item => {
			return (
				<div className="col-md-4">
					<h2>{item.title}</h2>
					<img src={item.thumbnail} />
					<button
						className="btn btn-primary"
						onClick={() =>
							this.approveRequest(item.senders_id, item.title, item.thumbnail)
						}>
						Approve
					</button>
					<button
						className="btn btn-primary"
						onClick={() => this.props.cancelPendingRequest(item.books_id)}>
						Cancel Request
					</button>
				</div>
			);
		});
	}
	render() {
		return (
			<div>
				<h1>Pending Requests</h1>
				<div className="row">{this.renderRequests()}</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return { PendingRequests: state.GetPendingRequests };
}
export default connect(mapStateToProps, {
	getPendingRequests,
	approveRequests,
	cancelPendingRequest
})(PendingRequests);
