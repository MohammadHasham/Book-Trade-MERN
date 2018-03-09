import { GET_MY_REQUESTS, CANCEL_REQUEST } from '../actions/types/types.js';
export default function(state = [], action) {
	switch (action.type) {
		case GET_MY_REQUESTS:
			return [...action.payload.data, ...state];
		case CANCEL_REQUEST:
			return [...action.payload.data];
		default:
			return state;
	}
}
