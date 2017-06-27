import React from 'react';
import Header from './header';
import Body from './body';

//Dom Export

export default class Layout extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentGuess: '',
			history: [],
			target: Math.round(Math.random()*100),
			feedback: 'Make a guess'
		}
	}

	onGuess(guess){
		console.log("Guess is working")
	} 

	render () {
		return (
			<div className="Layout">
				<Header />
				<Body 
					onGuess={(guess) => this.onGuess(guess)}
					guessnumber={this.state.history.length}
					history={this.state.history} 
					feedback={this.state.feedback}
				/>
			</div>	
		)	
	}
}
