import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';
import authReducer from '../reducers/auth_reducer';

// const ROOT_URL = 'http://rest.learncode.academy/api/aurora';
const ROOT_URL = 'http://localhost:3000';

export const CREATE_POSTS = 'CREATE_POSTS';

// signs in a previous user, uses redux thunk to return a function
export function signinUser ({ email, password }){
	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`, {email, password})
			.then(response => {
				// This only starts if the request was good
				//we now update the state to indicate auth user
				dispatch({ type: AUTH_USER });
				// this will put the token in localStorage.  It's safe
				localStorage.setItem('token', response.data.token);
				//this sends us off to the newitem page
				browserHistory.push('/newitem');
		})
			.catch(response => dispatch(authError("Bad login info")));
	}
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}