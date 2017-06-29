import React from 'react';
import Header from './header';
import Body from './body';

import './layout.css';

//Dom Export

export default class Layout extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			temp: 'COLD',
			currentGuess: '',
			history: [],
			target: Math.round(Math.random()*100)
		};
	}

	new(e){
		this.setState({
			temp: 'COLD',
			currentGuess: '',
			history: [],
			target: Math.round(Math.random()*100)
		});
	}

	onGuess(guess){
		console.log(typeof guess);
		if (isNaN(parseInt(guess, 10))) {
			this.setState({
				temp: "Please enter a #"
			})
			return
		}
		console.log("target " + this.state.target);

		this.setState({
			currentGuess: guess,
			history: [...this.state.history, guess]
		});

		console.log("Guess is " + guess);
		let result = Math.abs(this.state.target - guess);

		let feedback;

		if (result >= 25) {
			feedback = 'FREEZING'
		}
		else if (result >= 15) {
			feedback = 'COLD'
		}
		else if (result >= 10) {
			feedback = 'WARM'
		}
		else if (result >= 5) {
			feedback = 'HOT'
		}
		else if (result >= 1) {
			feedback = 'BURNING'
		}
		else if (result === 0) {
			feedback = 'BINGO'
		}
		this.setState({
			temp: feedback
		})	
	}	

	render () {
		return (
			<div className="Layout">
				<Header new={()=> this.new()} />
				<Body 
					temp={this.state.temp}
					onGuess={(guess) => this.onGuess(guess)}
					guessnumber={this.state.history.length}
					guess={this.state.currentGuess}
					history={this.state.history} 
					feedback={this.state.feedback}
				/>
			</div>	
		)	
	}
}
