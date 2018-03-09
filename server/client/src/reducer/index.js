import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import PasswordReducer from './PasswordReducer';
import ProfileReducer from './ProfileReducer';
import AllBooksReducer from './AllBooksReducer';
import GetPendingRequests from './GetPendingRequests';
import GetMyRequestsReducer from './GetMyRequestsReducer';
import ApproveRequestsReducer from './ApproveRequestsReducer';
import selectBooks from './selectBooks';
const rootReducer = combineReducers({
	// state: (state = {}) => state
	form: reduxFormReducer,
	PasswordReducer,
	ProfileReducer,
	AllBooksReducer,
	GetPendingRequests,
	ApproveRequestsReducer,
	GetMyRequestsReducer,
	selectBooks
});

export default rootReducer;
