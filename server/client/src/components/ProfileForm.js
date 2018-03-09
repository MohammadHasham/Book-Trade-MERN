import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePassword, updateProfile } from '../actions';
class ProfileForm extends Component {
	constructor() {
		super();

		this.state = {
			city: '',
			state: '',
			oldPassword: '',
			newPassword: ''
		};
	}

	render() {
		return (
			<div className="container" style={{ marginTop: '5%' }}>
				<div className="jumbotron">
					<h1>Update Profile</h1>
					<div class="form-group row">
						<label for="example-text-input" class="col-2 col-form-label">
							State
						</label>
						<div class="col-10">
							<input
								class="form-control"
								type="text"
								value={this.state.state}
								id="example-text-input"
								onChange={e => this.setState({ state: e.target.value })}
							/>
						</div>
					</div>
					<div class="form-group row">
						<label for="example-search-input" class="col-2 col-form-label">
							City
						</label>
						<div class="col-10">
							<input
								class="form-control"
								type="search"
								value={this.state.city}
								id="example-search-input"
								onChange={e => this.setState({ city: e.target.value })}
							/>
						</div>
						<button
							type="submit"
							class="btn btn-primary"
							onClick={() =>
								this.props.updateProfile(this.state.city, this.state.state)
							}>
							Update Profile
						</button>
					</div>
					<h1>Change Password</h1>
					<div class="form-group row">
						<label for="example-text-input" class="col-2 col-form-label">
							Current Password
						</label>
						<div class="col-10">
							<input
								class="form-control"
								type="text"
								value={this.state.oldPassword}
								id="example-text-input"
								onChange={e => this.setState({ oldPassword: e.target.value })}
							/>
						</div>
					</div>
					<div class="form-group row">
						<label for="example-search-input" class="col-2 col-form-label">
							New Password
						</label>
						<div class="col-10">
							<input
								class="form-control"
								type="search"
								value={this.state.newPassword}
								id="example-search-input"
								onChange={e => this.setState({ newPassword: e.target.value })}
							/>
						</div>
						<button
							type="submit"
							class="btn btn-primary"
							onClick={() =>
								this.props.updatePassword(
									this.state.oldPassword,
									this.state.newPassword
								)
							}>
							Update Password
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(null, { updatePassword, updateProfile })(ProfileForm);
