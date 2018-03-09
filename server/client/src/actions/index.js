import {
	UPDATE_PROFILE,
	UPDATE_PASSWORD,
	ADD_BOOKS,
	ALL_BOOKS,
	REQUEST_BOOK,
	PENDING_REQUESTS,
	APPROVE_REQUESTS,
	GET_MY_REQUESTS,
	CANCEL_REQUEST,
	CANCEL_PENDING_REQUEST,
	CURRENT_BOOKS
} from './types/types.js';
import axios from 'axios';
export function updatePassword(oldPassword, newPassword) {
	return function(dispatch) {
		axios
			.post('/api/updatePassword', { oldPassword, newPassword })
			.then(response => {
				dispatch({ type: UPDATE_PASSWORD, payload: response });
			});
	};
}
export function updateProfile(city, state) {
	return function(dispatch) {
		axios.post('/api/updateProfile', { city, state }).then(response => {
			dispatch({ type: UPDATE_PROFILE, payload: response });
		});
	};
}
export function addBooks(name) {
	return function(dispatch) {
		axios
			.post('/api/addBooks', {
				title: name[0].title,
				thumbnail: name[0].thumbnail
			})
			.then(response => {
				dispatch({ type: ADD_BOOKS, payload: response });
			});
	};
}
export function allBooks() {
	return function(dispatch) {
		axios.get('/api/allBooks').then(response => {
			dispatch({ type: ALL_BOOKS, payload: response.data });
		});
	};
}
export function requestBook(id) {
	return function(dispatch) {
		axios.post('/api/request', { id }).then(response => {
			dispatch({ type: REQUEST_BOOK, payload: response });
		});
	};
}
export function getPendingRequests() {
	return function(dispatch) {
		axios.get('/api/getPendingRequests').then(response => {
			dispatch({ type: PENDING_REQUESTS, payload: response });
		});
	};
}
export function approveRequests(title, sendersId, thumbnail) {
	return function(dispatch) {
		axios
			.post('/api/approve', { title, sendersId, thumbnail })
			.then(response => {
				dispatch({ type: APPROVE_REQUESTS, payload: response });
			});
	};
}
export function getMyRequests() {
	return function(dispatch) {
		axios.get('/api/getMyRequests').then(response => {
			dispatch({ type: GET_MY_REQUESTS, payload: response });
		});
	};
}
export function cancelRequest(id) {
	return function(dispatch) {
		axios.post('/api/cancelrequest', { bookId: id }).then(response => {
			dispatch({ type: CANCEL_REQUEST, payload: response });
		});
	};
}
export function cancelPendingRequest(id) {
	return function(dispatch) {
		axios.post('/api/cancelpendingrequest', { bookId: id }).then(response => {
			dispatch({ type: CANCEL_PENDING_REQUEST, payload: response });
		});
	};
}

export function current() {
	return function(dispatch) {
		axios.get('/api/currentbooks').then(response => {
			dispatch({ type: CURRENT_BOOKS, payload: response });
		});
	};
}
