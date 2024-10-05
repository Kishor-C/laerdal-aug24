import { configureStore } from "@reduxjs/toolkit";
import nameReducer from './reducer';


let store = configureStore({reducer : {
    username : nameReducer
}})

// earlier you used let store = createStore(reducer)


export default store;