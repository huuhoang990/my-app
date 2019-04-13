export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST"
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS"
export const PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL"

export function productListRequest() {
	return {
		type: PRODUCT_LIST_REQUEST
	}
}

export function productListSuccess(data) {
	return {
		type: PRODUCT_LIST_SUCCESS,
		payload: data
	}
}

export function productListFail(error) {
	return {
		type: PRODUCT_LIST_FAIL,
		error: error
	}
}

export function getProducts() {
	return (dispatch) => {
	  dispatch(productListRequest())
	  return fetch("https://mapi.sendo.vn/mob/product/cat/phu-kien-cong-nghe/phu-kien-may-tinh-laptop/usb/?p=1")
		.then(r => r.json())
		.then(result => {
			for (let i = 0; i < result.data.length; i++) {
				result.data[i].quantity = 0
			}

			return dispatch(productListSuccess(result.data))
		})
		.catch(error => dispatch(productListFail(error)))
	}
}

export function setArrProduct(arr) {
	return (dispatch) => {
		dispatch(productListSuccess([...arr]))
	}
}

export function getSearchProducts(textSearch) {
	return (dispatch) => {
		dispatch(productListRequest())

		return fetch("https://mapi.sendo.vn/mob/product/search?p=1&q=" + textSearch)
			.then(r => r.json())
			.then(result => {
				return dispatch(productListSuccess(result.data))
			})
			.catch(error => dispatch(productListFail(error)))
	}
}