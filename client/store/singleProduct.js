import axios from 'axios';

export const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT';

export const setSingleProduct = (product) => {
  return {
    type: SET_SINGLE_PRODUCT,
    product,
  };
};

export const getSingleProduct = (productId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/products/${productId}`);
      console.log('THIS IS THE DATA RETURNED THUNK', data);
      dispatch(setSingleProduct(data));
    } catch (err) {
      console.error(err);
    }
  };
};

const initialState = {
  //singleProduct: [],
};
export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      //return { ...state, singleProduct: action.product };
      return action.product;
    default:
      return state;
  }
}
