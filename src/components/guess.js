import React from 'react';

export default class Guess extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			theGuess: "75 Degrees is your guess"
		}
	}
	render(){
		return (
			<div>
				<h3>{this.state.theGuess}</h3>
			</div>	 

			)
	}
}