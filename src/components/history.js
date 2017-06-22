import React from 'react';
import './history.css';

//List of past guesses - an array

export default class History extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			history: "Will be array of history"
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