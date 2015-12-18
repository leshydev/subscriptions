import * as types from '../constants/CouponActionTypes'

export function getCoupon(id, data) {
  return { type: types.GET_COUPON, id, data }
}

export function fetchCoupon(id) {
  return dispatch => {
    return fetch(`http://localhost:3001/recipe/${id}`)
        .then(response => response.json())
        .then(json =>
            dispatch(getCoupon(id, json))
        )
  }
}