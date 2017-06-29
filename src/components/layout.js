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
		}
	}

	new(e){
		this.setState({
			temp: 'COLD',
			currentGuess: '',
			history: [],
			target: Math.round(Math.random()*100)
		})
	}

	onGuess(guess){
		console.log(this.state.target);
		this.setState({
			currentGuess:guess,
			history: [...this.state.history, guess]
		})

		let result = Math.abs(this.state.currentGuess - this.state.target);

		if (result >= 25) {
			this.setState({ 
				temp: 'FREEZING'
			})
		}
		else if (result >= 15) {
			this.setState({
				temp: 'COLD'
			})
		}
		else if (result >= 10) {
			this.setState({
				temp: 'WARM'
			})
		}
		else if (result >= 4) {
			this.setState({
				temp: 'HOT'
			})
		}
		else if (result === 0) {
			this.setState({
				temp: 'BINGO'
			})
		}
	}	

	render () {
		return (
			<div className="Layout">
				<Header new={()=> this.new()}/>
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
