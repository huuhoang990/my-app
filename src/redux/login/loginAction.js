import firebaseApp from '../../firebase'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'


export function loginRequest() {
	return {
		type: LOGIN_REQUEST,
	}
}

export function loginSuccess(data) {
	return {
		type: LOGIN_SUCCESS,
		user:data
	}
}

export function loginFail() {
	return {
		type: LOGIN_FAIL
	}
}

export function sendLogin(email, password) {
	return async (dispatch) => {
		dispatch(loginRequest())
		const result = await firebaseApp.auth().signInWithEmailAndPassword(email, password);

		if (result) {
			dispatch(loginSuccess(result))

		} else {
			dispatch(loginFail())
		}
	}
}