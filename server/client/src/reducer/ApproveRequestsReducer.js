import { APPROVE_REQUESTS } from '../actions/types/types.js';
export default function(state = [], action) {
	console.log(action.payload);
	switch (action.type) {
		case APPROVE_REQUESTS:
			console.log([...action.payload, ...state]);
			return [...action.payload, ...state];
		default:
			return state;
	}
}
