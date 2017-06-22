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
			feedback: 'make a guess'
		}
	}

	render () {
		return (
			<div className="Layout">
				<Header />
				<Body history={this.state.history}/>
			</div>	
		)	
	}
}