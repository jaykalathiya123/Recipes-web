import { combineReducers } from "redux"; 
import recipReducer from "./recipReducer";

const mainReducers = combineReducers ({
    recipReducer ,
})

export default mainReducers 