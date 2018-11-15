import React from  "react";
import HelloWorld from "./HelloWorld";
import store from "./store";
import ButtonGroup from "./ButtonGroup";
/*import { createStore } from "redux";
import reducer from  "./reducers";*/


/*const initialstate = { tech:"React" };
const store = createStore(reducer,initialstate);
*/
class App extends React.Component{
  render(){
  	// With React 16, you don’t have to wrap adjacent JSX elements in a div. 
  	// You can use an array if you want — but pass in a key prop to each element in the array.
    return [
    	<HelloWorld tech={store.getState().tech} />,
    	<ButtonGroup technologies={["React", "Ember", "Angular"]} />
    ]
  }
}

export default App;