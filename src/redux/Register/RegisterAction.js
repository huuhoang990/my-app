export const REGISTER_REQUEST = "REGISTER_REQUEST"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAIL = "REGISTER_FAIL"

export function registerRequest() {
	return {
		type : REGISTER_REQUEST
	}
}

export function registerSuccess() {
	return {
		type : REGISTER_SUCCESS
	}
}

export function registerFail() {
	return {
		type : REGISTER_FAIL
	}
}