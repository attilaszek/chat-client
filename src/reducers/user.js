import * as types from '../constants/ActionTypes'

const user = (state = {}, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return action.payload
    default:
      return state
  }
}

export default user