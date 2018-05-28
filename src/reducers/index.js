import { combineReducers } from "redux"
import user from "./user"

const chat = combineReducers({
  user: user
});

export default chat