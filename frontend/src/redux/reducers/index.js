import { combineReducers } from "redux";
import auth from "./auth";
import games from "./games";
import rtp from "./rtp";
import customers from "./customers";
import profits from "./profits";
import betHistory from "./betHistory";

const rootReducer = combineReducers({
  auth : auth,
  games : games,
  rtp : rtp,
  customers : customers,
  profits : profits,
  betHistory: betHistory
})

export default rootReducer
