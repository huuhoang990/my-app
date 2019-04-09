import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL} from './RegisterAction'

const initialState = {
	result: null,
	load: false,
	fail: null
};

export default function registerReducer(state = initialState, action) {
	switch (action.type) {
		case REGISTER_REQUEST:
			return {
				...state,
				load: true,
				result: action.type
			}
		case REGISTER_SUCCESS:
			return {
				...state,
				load: false,
				result: action.type
			}
		case REGISTER_FAIL:
			return {
				...state,
				load: false,
				result: action.type
			}
		default:
			return {...state}
	}
}