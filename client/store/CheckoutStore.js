import axios from "axios";

//action type
export const SET_PRODUCTS_IN_CART = "SET_PRODUCTS_IN_CART";
// export const ADD_PRODUCT = "ADD_PRODUCT";
// export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

//action creator
export const _setProductsInCart = (products) => ({
  type: SET_PRODUCTS_IN_CART,
  products,
});

// export const _addProduct = (product) => ({
//   type: ADD_PRODUCT,
//   product,
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
export const fetchProductsInCart = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/checkoutExample");
      dispatch(_setProductsInCart(data));
    } catch (error) {
      console.log(
        "there is an error inside of our addProducts thunk store/checkoutStore",
        error
      );
    }
  };
};
// export const addProduct = (product) => {
//   return async (dispatch) =>{
//   try{
//     const {data} = await axios.get("/api/checkoutExample", product );
//     dispatch(_addProduct(data));
//   }catch(error){
//     console.log('there is an error inside of our addProducts thunk store/checkoutStore', error)
//   }
// }
// };

// export const updateProduct = (product) => {
//   return async (dispatch) =>{
//   try{
//     const {data} = await axios.get("/api/checkoutExample", product );
//     dispatch()
//   }catch(error){
//     console.log('there is an error inside of our updateProducts thunk store/checkoutStore', error)
//   }
// }
// };

export const deleteProduct = (id, history) => {
  return async (dispatch) =>{
  try{
    const {data} = await axios.delete(`/api/checkoutExample/${id}`);
    dispatch(_deleteProduct(data))
    history.push("/checkoutExample");
  }catch(error){
    console.log('there is an error inside of our deleteProducts thunk store/checkoutStore', error)
  }
}
};

//reducer
const initialState = [];

export default function checkoutStoreReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS_IN_CART:
      return action.products;
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.product.id)
    default:
      return state;
  }
}
