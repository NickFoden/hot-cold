import React from 'react';
import'./guessnumber.css'

export default class GuessNumber extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			guessNumbers: "This is your 3rd Guess"
		}
	}
	render(){
		return (
			<div className="GuessNumber">
				{this.state.guessNumbers}
			</div>	 

			)
	}
}