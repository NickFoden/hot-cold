import React from 'react';
import'./guessnumber.css'

//Number of guesses thus far

export default class GuessNumber extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			guessNumbers: ""
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