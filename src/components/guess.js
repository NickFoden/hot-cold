import React from 'react';
import './guess.css';

export default class Guess extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			theGuess: "75 Degrees is your guess"
		}
	}
	render(){
		return (
			<div className="Guess">
				{this.state.theGuess}
			</div>	 

			)
	}
}