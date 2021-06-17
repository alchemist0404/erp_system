import { combineReducers } from "redux";
import auth from "./auth";
import games from "./games";
import rtp from "./rtp";
import customers from "./customers";
import profits from "./profits";

const rootReducer = combineReducers({
  auth : auth,
  games : games,
  rtp : rtp,
  customers : customers,
  profits : profits,
})

export default rootReducer
