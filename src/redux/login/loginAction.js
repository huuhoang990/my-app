export const GET_LOGIN_REQUEST = 'GET_LOGIN_REQUEST'
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS'
export const GET_LOGIN_FAIL = 'GET_LOGIN_FAIL'


export function loginRequest() {
	return {
		type: GET_LOGIN_REQUEST,
	}
}

export function loginSuccess() {
	return {
		type: GET_LOGIN_SUCCESS
	}
}

export function loginFail() {
	return {
		type: GET_LOGIN_FAIL
	}
}
