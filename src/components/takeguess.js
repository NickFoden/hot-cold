import React from 'react';
import "./takeguess.css"

export default class TakeGuess extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			guess: "Past guesses"
		}
	}
	render(){
		return (
			<div className="TakeGuess">
				<form name="GuessForm">
					<input type="text"></input>
					<button type="submit">Guess</button>
				</form>
			</div>	 

			)
	}
}