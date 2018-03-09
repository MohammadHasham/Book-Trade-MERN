import {
	PENDING_REQUESTS,
	CANCEL_PENDING_REQUEST
} from '../actions/types/types.js';
export default function(state = [], action) {
	console.log(action.payload);
	switch (action.type) {
		case PENDING_REQUESTS:
			return [...action.payload.data, ...state];
		case CANCEL_PENDING_REQUEST:
			return [...action.payload.data];
		default:
			return state;
	}
}
