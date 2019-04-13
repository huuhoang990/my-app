import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL} from './LoginAction'

const initialState = {
	user : null,
	load : false,
	fail : null
}

export default function loginReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
				load: true
			}
		case LOGIN_SUCCESS:
			return {
				...state,
				load: false,
				user: action.user
			}
		case LOGIN_FAIL:
			return {
				...state,
				load: false,
				fail: action.console.error
			}
		default:
			return state
	}
}