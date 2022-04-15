import {
  ADD_CART,
  DECREASE_QUANTITY,
  GET_PRODUCTS,
  INCREASE_QUANTITY,
  SET_LIST_PRODUCTS,
} from "../type";
import callApi from "../../../pages/api/product";

export function AddCart(payload) {
  return {
    type: ADD_CART,
    payload,
  };
}

export function increaseQuantity(payload) {
  return {
    type: INCREASE_QUANTITY,
    payload,
  };
}

export function decreaseQuantity(payload) {
  return {
    type: DECREASE_QUANTITY,
    payload,
  };
}

export const getProducts = async (dispatch) => {
  try {
    const getList = await callApi("products");
    dispatch({
      type: SET_LIST_PRODUCTS,
      payload: getList.data,
    });
  } catch (error) {
    console.log("error", error);
  }
};
