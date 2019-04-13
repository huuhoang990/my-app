import {
	PRODUCT_DETAIL_REQUEST,
	PRODUCT_DETAIL_SUCCESS,
	PRODUCT_DETAIL_FAIL
  } from "./ProductDetailAction";

const initialState = {
	result: null,
	load: false,
	fail: null
  };
  
  export default function productDetailReducer(state = initialState, action) {
	switch (action.type) {
		case PRODUCT_DETAIL_REQUEST:
			return { ...state, load: true, result: action.type };
		case PRODUCT_DETAIL_SUCCESS:
			return { ...state, load: false, result: action.type };
		case PRODUCT_DETAIL_FAIL:
			return { ...state, load: false, result: action.type };
	 	default:
			return { ...state };
	}
  }
  