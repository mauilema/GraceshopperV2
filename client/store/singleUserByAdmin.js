import axios from 'axios'

//action types
const SET_USER = 'SET_USER'
// const UPDATE_USER = 'UPDATE_USER'

//action creators
const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}

// export const _updateRobot = (robot) => {
//     return {
//       type: UPDATE_USER,
//       robot
//     }
//   }

//thunk creators
export const fetchUser = (userId) => {
    return async (dispatch) => {
        try {
        const token = window.localStorage.getItem('token')    
        const { data } = await axios.get(`/api/users/${userId}`, {
            headers: {
                authorization: token
            }
        })
        dispatch(setUser(data))
        } catch (error) {
            console.log(error)
        }
    }
}

// export const updateRobot = (robot) => {
//     return async (dispatch) => {
//       try {
//       const { data: updated } = await axios.put(`/api/robots/${robot.id}`, robot)
//       dispatch(_updateRobot(updated))
//       } catch (error) {
//         console.log(error)
//     }
//     }
//   }

// export const removeRelation = (robotId, projectId) => {
//     return async (dispatch) => {
//         try {
//         await axios.put(`/api/relations/${robotId}/${projectId}`)
//         dispatch(fetchRobot(robotId))
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }

//initalState & reducer

const initialState = {}

export default function singleUserReducer (state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return action.user
        // case UPDATE_USER:
        //     return action.robot
        default:
            return state
    }
}
