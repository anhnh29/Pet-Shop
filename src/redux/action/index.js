import {
  ADD_CART,
  DECREASE_QUANTITY,
  GET_PRODUCTS,
  INCREASE_QUANTITY,
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

export const getProducts = async () => {
  try {
    const getList = await callApi("products");
    return {
      type: GET_PRODUCTS,
      payload: getList.data,
    };
  } catch (error) {
    console.log("error", error);
  }
};
