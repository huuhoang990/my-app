import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL} from './RegisterAction'

const initialState = {
	user: null,
	load: false,
	fail: null
};

export default function registerReducer(state = initialState, action) {

	switch (action.type) {
		case REGISTER_REQUEST:
			return {
				...state,
				load: true
			}
		case REGISTER_SUCCESS:
			return {
				...state,
				load: false,
				user: action.user
			}
		case REGISTER_FAIL:
			return {
				...state,
				load: false,
				fail: action.console.error
			}
		default:
			return {...state}
	}
}