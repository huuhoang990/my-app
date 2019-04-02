import {GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_LOGIN_FAIL} from './loginAction'

const initialState = {
	result : null,
	load : false,
	fail : null
}

export default function loginReducer(state = initialState, action) {
	switch (action.type) {
		case GET_LOGIN_REQUEST:
			return Object.assign({}, state, {
				load: true
			})
		case GET_LOGIN_SUCCESS:
			return Object.assign({}, state, {
				load: false,
				result: action.payload
			})
		case GET_LOGIN_FAIL:
			return Object.assign({}, state, {
				load: false,
				result: action.error
			})
		default:
			return state
	}
}