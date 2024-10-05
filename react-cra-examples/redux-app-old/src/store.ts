import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer";
// configure the reducer with the createStore
let store = createStore(reducer);
// export the state 
export default store;

