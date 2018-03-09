import { UPDATE_PASSWORD } from '../actions/types/types.js';
export default function(state = { oldPassword: '', newPassword: '' }, action) {
	switch (action.type) {
		case UPDATE_PASSWORD:
			return {
				oldPassword: action.payload.data.oldPassword,
				newPassword: action.payload.data.newPassword
			};
		default:
			return state;
	}
}
