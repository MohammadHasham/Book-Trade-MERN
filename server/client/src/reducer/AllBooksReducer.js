import { ALL_BOOKS } from '../actions/types/types.js';
export default function(state = [], action) {
	console.log(action.payload);
	switch (action.type) {
		case ALL_BOOKS:
			return [...action.payload, ...state];
		default:
			return state;
	}
}
