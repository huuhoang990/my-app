import firebaseApp from '../../firebase'

export const REGISTER_REQUEST = "REGISTER_REQUEST"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAIL = "REGISTER_FAIL"

export function registerRequest() {
	return {
		type : REGISTER_REQUEST
	}
}

export function registerSuccess(data) {
	return {
		type : REGISTER_SUCCESS,
		user : data
	}
}

export function registerFail() {
	return {
		type : REGISTER_FAIL
	}
}

export function sendRegister(name, email, password) {
	return async (dispatch) => {
		dispatch(registerRequest())
		const result = await firebaseApp.auth().createUserWithEmailAndPassword(email, password);

		if (result) {
			dispatch(registerSuccess(result))

		} else {
			dispatch(registerFail())
		}
	}
}