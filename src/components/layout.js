import React from 'react';
import Header from './header';
import Body from './body';

//Dom Export

export default class Layout extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			temp: 'COLD',
			currentGuess: '',
			history: [],
			target: Math.round(Math.random()*100),
			feedback: 'Make a guess'
		}
	}

	onGuess(guess){
		this.setState({
			currentGuess:guess,
			history: [guess, ...this.state.history]
		})

		let result = Math.abs(this.state.currentGuess - this.state.target);

		if (result > 25) {
			this.setState({ 
				temp: 'FREEZING'
			})
		}
		else if (result > 15) {
			this.setState({
				temp: 'COLD'
			})
		}
		else if (result > 8) {
			this.setState({
				temp: 'WARM'
			})
		}
		else if (result > 4) {
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
				<Header />
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
