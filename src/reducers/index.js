import { combineReducers } from "redux"
import user from "./user"
import users from "./users"

const chat = combineReducers({
  user: user,
  users: users
});

export default chat