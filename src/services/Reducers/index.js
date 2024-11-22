import { combineReducers } from "redux"; 
import recipReducer from "./recipReducer";
import authReducers from "./authReducer";

const mainReducers = combineReducers ({
    recipReducer ,
    authReducers 
})

export default mainReducers 