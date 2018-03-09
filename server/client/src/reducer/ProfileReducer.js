import { UPDATE_PASSWORD } from '../actions/types/types.js';
export default function(state = { city: '', state: '' }, action) {
	switch (action.type) {
		case UPDATE_PASSWORD:
			return {
				city: action.payload.data.city,
				state: action.payload.data.state
			};
		default:
			return state;
	}
}
