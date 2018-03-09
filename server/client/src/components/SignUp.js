import React from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import axios from 'axios';
var queryString = require('querystring');
class SignUp extends React.Component {
	renderField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label>{field.label}</label>
				<input className="form-control" type="text" {...field.input} />
				<div className="text-help">{touched ? error : ''}</div>
			</div>
		);
	}
	handleSubmit = values => {
		const { email, pwd } = values;
		axios
			.post(
				'/register',
				queryString.stringify({ username: email, password: pwd })
			)
			.then(response => {});
	};
	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
				<Field label="Enter Email" name="email" component={this.renderField} />
				<Field label="Enter Password" name="pwd" component={this.renderField} />

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		);
	}
	onSubmit = () => {};
}

function validate(values) {
	// console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
	const errors = {};
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!re.test(values.email)) {
		errors.email = 'Please enter a valid email';
	}
	// Validate the inputs from 'values'
	if (!values.email) {
		errors.email = 'Enter an email';
	}
	if (!values.pwd) {
		errors.pwd = 'Enter a password';
	}

	// If errors is empty, the form is fine to submit
	// If errors has *any* properties, redux form assumes form is invalid

	return errors;
}

export default reduxForm({
	form: 'signup',
	validate
})(SignUp);
