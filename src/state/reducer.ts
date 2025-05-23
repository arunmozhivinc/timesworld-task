import { combineReducers } from "redux"
import authReducer from "../redux/auth-reducer";

const appReducers = combineReducers(
    {
        auth:authReducer
    }
)
export default appReducers;