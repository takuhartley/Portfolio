// Dependencies Import
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// ----------------------------------------------------------------------------------------------------
// Reducers Import
import {
	userLoginReducer,
	userDetailsReducer,
	userListReducer,
	userUpdateReducer,
} from './redux/reducers/userReducers';
// ----------------------------------------------------------------------------------------------------
import {
	projectListReducer,
	projectDetailsReducer,
	projectCreateReducer,
	projectUpdateReducer,
} from './redux/reducers/projectReducers';
// ----------------------------------------------------------------------------------------------------
// Reducers
const reducer = combineReducers({
	// User
	userLogin: userLoginReducer,
	userList: userListReducer,
	userDetails: userDetailsReducer,
	userUpdate: userUpdateReducer,
	// Project
	projectCreate: projectCreateReducer,
	projectList: projectListReducer,
	projectDetails: projectDetailsReducer,
	projectUpdate: projectUpdateReducer,
});
// ----------------------------------------------------------------------------------------------------
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
// ----------------------------------------------------------------------------------------------------
const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
};
// ----------------------------------------------------------------------------------------------------
const middleware = [thunk];
// ----------------------------------------------------------------------------------------------------
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
// ----------------------------------------------------------------------------------------------------
export default store;
