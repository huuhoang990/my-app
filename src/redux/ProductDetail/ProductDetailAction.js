//Action type
export const PRODUCT_DETAIL_REQUEST = "PRODUCT_DETAIL_REQUEST";
export const PRODUCT_DETAIL_SUCCESS = "PRODUCT_DETAIL_SUCCESS";
export const PRODUCT_DETAIL_FAIL = "PRODUCT_DETAIL_FAIL";

//Action Creator
export function productDetailRequest() {
  return {
    type: PRODUCT_DETAIL_REQUEST
  };
}

//Action Creator
export function productDetailSuccess() {
  return {
    type: PRODUCT_DETAIL_SUCCESS
  };
}

//Action Creator
export function productDetailFail() {
  return {
    type: PRODUCT_DETAIL_FAIL
  };
}
