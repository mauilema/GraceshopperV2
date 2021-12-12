import axios from 'axios'

//action types
const SET_USERS = 'SET_USERS'
const ADD_USER = 'ADD_USER'

//action creators
export const setUsers= (users) => {
    return {
        type: SET_USERS,     
        users
    }
}

const _addUser = (user) => {
    return {
        type: ADD_USER,
        user
    }
}

//thunk creators
export const fetchUsers = () => {
    return async (dispatch) => {
        try {
        const token = window.localStorage.getItem('token')
        const { data } = await axios.get('api/users/admin', {
            headers: {
                authorization: token
            }
        })
        dispatch(setUsers(data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const addUser = (user, history) => {
    return async (dispatch) => {
      try {
      const { data: added} = await axios.post('api/users', user)
      dispatch(_addUser(added))
      history.push('/users/admin')
      } catch (error) {
        console.log(error)
      }
    }
  }


const initialState = []

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USERS:
            return action.users
        case ADD_USER:
            return [...state, action.user]
        default:
            return state
    }
}

