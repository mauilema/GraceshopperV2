import axios from 'axios';

//action types
const SET_PRODUCTS_ADMIN = 'SET_PRODUCTS_ADMIN';

//action creators
const setProductsAdmin = (productsAdmin) => {
	return {
		type: SET_PRODUCTS_ADMIN,
		productsAdmin,
	};
};

//thunk creators
export const fetchProductsAdmin = () => {
	return async (dispatch) => {
		try {
			const token = window.localStorage.getItem('token')    
			const { data } = await axios.get('api/products/admin', {
				headers: {
					authorization: token
				}
			})
			dispatch(setProductsAdmin(data));
		} catch (error) {
			console.log(error);
		}
	};
};

const initialState = [];

export default function productsAdminReducer(state = initialState, action) {
	switch (action.type) {
		case SET_PRODUCTS_ADMIN:
			return action.productsAdmin
		default:
			return state;
	}
}
