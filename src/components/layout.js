import React from 'react';
import Header from './header';

export default class Layout extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentGuess: null
		}
	}

	render(){
		const Header = this.props.title;

	return (
	
		<div className="Layout">
			<div className={Header} />
		</div>	
			)	
	}
}