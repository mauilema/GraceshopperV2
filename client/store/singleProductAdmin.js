import axios from 'axios'

//action types
const SET_PRODUCT_ADMIN = 'SET_PRODUCT_ADMIN'
const UPDATE_PRODUCT_ADMIN = 'UPDATE_PRODUCT_ADMIN'

//action creators
const setProductAdmin = (productAdmin) => {
    return {
        type: SET_PRODUCT_ADMIN,
        productAdmin
    }
}

const _updateProductAdmin = (productAdmin) => {
    return {
      type: UPDATE_PRODUCT_ADMIN,
      productAdmin
    }
  }

//thunk creators
export const fetchProductAdmin = (productAdminId) => {
    return async (dispatch) => {
        try {
        const token = window.localStorage.getItem('token')    
        const { data } = await axios.get(`/api/products/admin/${productAdminId}`, {
            headers: {
                authorization: token
            }
        })
        dispatch(setProductAdmin(data))
        } catch (error) {
            console.log(error) 
        }
    }
}

export const updateProductAdmin = (productAdmin) => {
    return async (dispatch) => {
      try {
      const token = window.localStorage.getItem('token') 
      const { data: updated } = await axios.put(`/api/products/${productAdmin.id}`, productAdmin, {
        headers: {
            authorization: token
        }
      })
      dispatch(_updateProductAdmin(updated))
      } catch (error) {
        console.log(error)
    }
    }
  }


//initalState & reducer

const initialState = {}

export default function singleProductAdminReducer (state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCT_ADMIN:
            return action.productAdmin
        // case UPDATE_USER:
        //     return action.user
        default:
            return state
    }
}
