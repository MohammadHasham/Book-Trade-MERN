import { CURRENT_BOOKS } from '../actions/types/types.js';
export default function(state = [], action) {
	console.log(action.payload);
	switch (action.type) {
		case CURRENT_BOOKS:
			return [...action.payload.data, ...state];
		default:
			return state;
	}
}
