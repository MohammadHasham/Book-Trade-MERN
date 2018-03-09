import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import reducer from './reducer';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReduxThunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducer)}>
		<App />
	</Provider>,
	document.getElementById('root')
);
