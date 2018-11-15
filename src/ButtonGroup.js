import React from "react";
import setTechnology from "./actions/actionCreators"
import store from "./store"

const ButtonGroup = ({ technologies }) => (
  <div>
    {technologies.map((tech, i) => (
      <button
        data-tech={tech}
        key={`btn-${i}`}
        className="hello-btn"
        onClick={dispatchBtnAction}
      >
        {tech}
      </button>
    ))}
  </div>
);


function  dispatchBtnAction(e){
	const tech=e.target.dataset.tech;
	store.dispatch(setTechnology(tech));
} 

export default ButtonGroup;

/*export default class ButtonGroup extends React.Component{
	render(){
		return(
			<div>
				{this.props.technologies.map((tech, i) => (
					<button
						data-tech={tech}
						key={`btn-${i.toString()}`}
						className="hello-btn"
						onClick={dispatchBtnAction}>
						{tech}
					</button>
    			))}
			</div>
		)
	}
}*/
