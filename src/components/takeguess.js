import React from 'react';
import "./takeguess.css"

//Guess Input

export default class TakeGuess extends React.Component {
	constructor(props){
		super(props);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	
	handleSubmit(e){
		e.preventDefault();
		console.log("testing");
	}
	render() {
		return (
			<div className="TakeGuess">
				<form name="GuessForm" onSubmit={this.handleSubmit}>
					<input type="number" placeholder="enter a number"></input>
					<button type="submit">Guess</button>
				</form>
			</div>	 

		)
	}
}	