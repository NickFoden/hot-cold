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
		this.setState({currentGuess:guess})
		let history = this.state.history.slice()
		history.push(guess)
		this.setState({history:history})

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
