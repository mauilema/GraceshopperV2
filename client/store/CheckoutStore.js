import axios from "axios";

//action type
// export const SET_PRODUCTS_IN_CART = "SET_PRODUCTS_IN_CART";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

//action creator
// export const _setProductsInCart = (products) => ({
//   type: SET_PRODUCTS_IN_CART,
//   products,
// });

// export const _updateProduct = (product) => ({
//   type: UPDATE_PRODUCT,
//   product,
// });

export const _deleteProduct = (product) => ({
  type: DELETE_PRODUCT,
  product,
});

//thunk creator
// export const fetchProductsInCart = () => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get("/api/cart");
//       dispatch(_setProductsInCart(data));
//     } catch (error) {
//       console.log(
//         "there is an error inside of our addProducts thunk store/checkoutStore",
//         error
//       );
//     }
//   };
// };
export const addProduct = (product, qty) => {
  return async (dispatch) => {
    try{
      const cartItems = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];

      // const duplicates = cartItems.filter(cartItems.id === product.id);
      
      // if(duplicates.length === 0){
        const addProd = {
          ...product,
          qty: 1,
        };

        cartItems.push(addProd);

        //add cart to redux
        localStorage.setItem("cart", JSON.stringify(cartItems));
  
        dispatch({
          type: ADD_PRODUCT,
          payload: cartItems,
        });

      // }


      // const { data } = await axios.get(`/api/products/${id}`);
      // dispatch({
      //   type: ADD_PRODUCT,
      //   payload: {
      //     product: data.id,
      //     name: data.name,
      //     image: data.image,
      //     ABV: data.ABV,
      //     stockAmount: data.stockAmount,
      //     price: data.price,
      //     description: data.description,
      //     alcoholType: data.alcoholType,
      //     qty,
      //   },
      // });
    }catch (error) {
      console.log(
        "there is an error inside of our addProducts thunk store/checkoutStore",
        error
      );
    }
  };
};

// export const updateProduct = (product) => {
//   return async (dispatch) =>{
//   try{
//     const {data} = await axios.get("/api/cart", product );
//     dispatch()
//   }catch(error){
//     console.log('there is an error inside of our updateProducts thunk store/checkoutStore', error)
//   }
// }
// };

export const deleteProduct = (product) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: DELETE_PRODUCT,
        payload: product,
      });
      
      localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
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
    case DELETE_PRODUCT:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
}
