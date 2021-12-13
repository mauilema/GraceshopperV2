import axios from "axios";

//action type
// export const SET_PRODUCTS_IN_CART = "SET_PRODUCTS_IN_CART";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_FROM_CART = "DELETE_FROM_CART";

export const _deleteFromCart = (product) => ({
  type: DELETE_FROM_CART,
  product,
});

export const _addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const addProduct = (product) => {
  return async (dispatch) => {
    try {
      const cartItems = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];

      const duplicates = cartItems.filter(
        (cartItems) => cartItems.id === product.id
      );

      if (duplicates.length === 0) {
        const addProd = {
          ...product,
          qty: 1,
        };

        cartItems.push(addProd);

        //add cart to redux
        localStorage.setItem("cart", JSON.stringify(cartItems));

        dispatch(_addProduct(cartItems));
      } else {
        const addProd = {
          ...product,
          qty: 1,
        };

          console.log('this is the if(===): ', cartItems.id, product.id)
        //add cart to redux
        localStorage.setItem("cart", JSON.stringify(cartItems));

        dispatch(_addProduct(cartItems));
      }
    } catch (error) {
      console.log(
        "there is an error inside of our addProducts thunk store/checkoutStore",
        error
      );
    }
  };
};

export const deleteFromCart = (product) => {
  return async (dispatch) => {
    try {
      const cartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

      // const updatedCart = cartItems.filter(items)

    } catch (error) {
      console.log(
        "there is an error inside of our deleteProducts thunk store/checkoutStore",
        error
      );
    }
  };
};

//reducer
const initialState = {
  cartItems: [],
};

if (localStorage.getItem("cart")) {
  initialState.cartItems = JSON.parse(localStorage.getItem("cart"));
} else {
  initialState.cartItems = [];
}

export default function checkoutStoreReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        cartItems: [...action.payload],
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
}
