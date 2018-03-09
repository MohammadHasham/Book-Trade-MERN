import { ADD_BOOKS } from '../actions/types/types.js';
export default function(state = [], action) {
	switch (action.type) {
		case ADD_BOOKS:
			return [action.payload.data, ...state];
		default:
			return state;
	}
}
