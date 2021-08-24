import { createStore, applyMiddleware } from "redux";
import  {dataStore} from "../reducers/index";
import thunk from "redux-thunk"; 

const store = createStore(dataStore, applyMiddleware(thunk), window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()); 
export default store;