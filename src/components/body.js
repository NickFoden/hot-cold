import React from 'react';
import Guess from './guess';
import GuessNumber from './guessnumber';
import History from './history';
import './body.css';


export default class Body extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: "Hot or Cold App",
			temp: "50 Degrees"
		}
	}
	render(){
		return (
			<div className="Container">
				<h1>{this.state.temp}</h1>
				<GuessNumber />
				<Guess />
				<History />
			</div>	 

			)
	}
}