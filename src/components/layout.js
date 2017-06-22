import React from 'react';
import Header from './header';
import Body from './body';

export default class Layout extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentGuess: 'null'
		}
	}

	render (){
	return (
		<div className="Layout">
			<Header />
			<Body />
		</div>	
			)	
	}
}