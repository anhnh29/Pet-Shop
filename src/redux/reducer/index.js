import {
  ADD_CART,
  INCREATE_PRODUCT,
  DECREASE_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  GET_PRODUCTS,
  SET_LIST_PRODUCTS,
} from "../type";

const initState = {
  totalCart: 0,
  cart: [],
  products: [],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LIST_PRODUCTS:
      // check get fail
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCTS:
      return state;
    case ADD_CART:
      console.log("state", state);
      if (state.totalCart == 0) {
        let pro = {
          ...action.payload,
          quantity: 1,
        };
        return {
          ...state,
          totalCart: 1,
          cart: [{ ...pro }],
        };
      } else {
        const index = state.cart.findIndex((item) => {
          return item.id === action.payload.id;
        });
        let newCart = [];
        if (index === -1) {
          state.cart = [
            ...state.cart,
            {
              ...action.payload,
              quantity: 1,
            },
          ];
        } else {
          state.cart[index].quantity++;
        }
        return {
          ...state,
          totalCart: state.totalCart + 1,
        };
      }
    case INCREASE_QUANTITY:
      const findIdxItem = state.cart.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (findIdxItem !== -1) {
        state.cart[findIdxItem].quantity++;
      }
      return {
        ...state,
        totalCart: state.quantity + 1,
      };
    case DECREASE_QUANTITY:
      const indexItem = state.cart.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (indexItem !== -1) {
        if (state.cart[indexItem].quantity > 1) {
          state.cart[indexItem].quantity--;
        } else {
          state.cart.splice(indexItem, 1);
        }
      }
      return {
        ...state,
        totalCart: state.quantity - 1,
      };
    default:
      return state;
  }
};
export default rootReducer;
