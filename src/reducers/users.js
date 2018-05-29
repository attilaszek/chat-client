import * as types from '../constants/ActionTypes'

const initialState = {
  users_list: [],
  active_user: null
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.POPULATE_USERS_LIST:
      return {
        users_list: action.payload,
        active_user: state.active_user
      }
    case types.ADD_ONLINE_USER:
      if (state.users_list.map(user => user.id).includes(action.payload.id)) {
        return state
      }
      else {
        return {
          users_list: [...state.users_list, action.payload],
          active_user: state.active_user
        }
      }
    case types.REMOVE_ONLINE_USER:
      var newUsers = state.users_list.slice()
      var index = state.users_list.map(user => user.id).indexOf(action.payload.id)
      if (index > -1) {
        newUsers.splice(index, 1)
      }
      var new_active_user = (state.active_user && state.active_user.id === action.payload.id) ? null : state.active_user
      //var new_active_user = state.active_user
      return {
        users_list: newUsers,
        active_user: new_active_user
      }
    case types.SET_ACTIVE_USER:
      return {
        users_list: state.users_list,
        active_user: action.payload
      }
    default:
      return state
  }
}

// const users = (state = [], action) => {
//   switch (action.type) {
//     case types.POPULATE_USERS_LIST:
//       return action.payload
//     case types.ADD_ONLINE_USER:
//       if (state.map(user => user.id).includes(action.payload.id)) {
//         return state
//       }
//       else {
//         return [...state, action.payload]
//       }
//     case types.REMOVE_ONLINE_USER:
//       var newState = state.slice()
//       var index = state.map(user => user.id).indexOf(action.payload.id)
//       if (index > -1) {
//         newState.splice(index, 1)
//       }
//       return newState
//     default:
//       return state
//   }
// }

export default users