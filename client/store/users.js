import axios from 'axios'

//action types
const SET_USERS = 'SET_USERS'

//action creators
export const setUsers= (users) => {
    return {
        type: SET_USERS,     
        users
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


const initialState = []

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USERS:
            return action.users
        default:
            return state
    }
}

