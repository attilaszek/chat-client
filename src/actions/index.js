import * as types from '../constants/ActionTypes'

export const setCurrentUser = (user) => ({
  type: types.SET_CURRENT_USER,
  payload: user
})

export const populateUsersList = (users) => ({
  type: types.POPULATE_USERS_LIST,
  payload: users
})

export const addOnlineUser = (user) => ({
  type: types.ADD_ONLINE_USER,
  payload: user
})

export const removeOnlineUser = (user) => ({
  type: types.REMOVE_ONLINE_USER,
  payload: user
})

export const setActiveUser = (email) => ({
  type: types.SET_ACTIVE_USER,
  payload: email
})