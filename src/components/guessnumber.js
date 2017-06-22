import React from 'react';

export default class GuessNumber extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			guessNumbers: "This is your 3rd Guess"
		}
	}
	render(){
		return (
			<div>
				<h3>{this.state.guessNumbers}</h3>
			</div>	 

			)
	}
}