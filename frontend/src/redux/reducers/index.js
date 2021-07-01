import { combineReducers } from "redux";
import auth from "./auth";
import games from "./games";
import rtp from "./rtp";
import users from "./users";
import profits from "./profits";
import betHistory from "./betHistory";

const rootReducer = combineReducers({
  auth : auth,
  games : games,
  rtp : rtp,
  users : users,
  profits : profits,
  betHistory: betHistory
})

export default rootReducer
