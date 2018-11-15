import { createStore } from "redux";
import reducer from  "../reducers";

const initialstate = { tech:"React" };
const store = createStore(reducer,initialstate);

export default store;