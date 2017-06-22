import React from 'react';
import './history.css';

export default class History extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			history: "Past guesses"
		}
	}
	render(){
		return (
			<div className="History">
				{this.state.history}
			</div>	 

			)
	}
}